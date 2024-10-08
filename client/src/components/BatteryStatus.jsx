import React, { useState, useEffect } from "react";
import { Zap, Wifi } from "lucide-react";

const BatteryAndInternetStatus = () => {
  const [batteryLevel, setBatteryLevel] = useState(null);
  const [charging, setCharging] = useState(false);
  const [batterySupported, setBatterySupported] = useState(true);
  const [internetSpeed, setInternetSpeed] = useState(null);
  const [connectionType, setConnectionType] = useState("unknown");

  useEffect(() => {
    const updateBatteryStatus = (battery) => {
      setBatteryLevel(Math.floor(battery.level * 100));
      setCharging(battery.charging);

      battery.addEventListener("levelchange", () => {
        setBatteryLevel(Math.floor(battery.level * 100));
      });

      battery.addEventListener("chargingchange", () => {
        setCharging(battery.charging);
      });
    };

    if ("getBattery" in navigator) {
      navigator.getBattery().then(updateBatteryStatus);
    } else {
      setBatterySupported(false);
    }
  }, []);

  useEffect(() => {
    const updateConnectionInfo = () => {
      const connection =
        navigator.connection ||
        navigator.mozConnection ||
        navigator.webkitConnection;
      if (connection) {
        setConnectionType(
          connection.effectiveType || connection.type || "unknown"
        );
      }
    };

    updateConnectionInfo();
    window.addEventListener("online", updateConnectionInfo);
    window.addEventListener("offline", updateConnectionInfo);

    return () => {
      window.removeEventListener("online", updateConnectionInfo);
      window.removeEventListener("offline", updateConnectionInfo);
    };
  }, []);

  useEffect(() => {
    const measureInternetSpeed = async () => {
      const startTime = Date.now();
      try {
        await fetch("https://www.cloudflare.com/cdn-cgi/trace", {
          cache: "no-store",
        });
        const endTime = Date.now();
        const duration = endTime - startTime;
        const speedMbps = (100 / duration) * 8; // Assuming the response is roughly 100 bytes
        setInternetSpeed(Number(speedMbps.toFixed(2)));
      } catch (error) {
        console.error("Error measuring internet speed:", error);
        setInternetSpeed(null);
      }
    };

    measureInternetSpeed();
    const interval = setInterval(measureInternetSpeed, 10000); // Update every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hidden absolute bottom-1 right-1 md:flex items-center justify-center bg-zinc-800">
      <div className="bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 py-6 px-10 shadow-md space-y-4">
        <h2 className="text-lg font-bold text-center mb-4">Device Status</h2>

        <div className="flex items-center justify-center space-x-4">
          <div className="relative w-16 h-7 bg-zinc-100 border-2 border-zinc-800 rounded-lg overflow-hidden">
            <div
              className={`absolute left-0 top-0 bottom-0 ${
                charging ? "bg-green-500 " : "bg-blue-500"
              }`}
              style={{ width: `${batteryLevel}%` }}
            ></div>
            <div className="absolute inset-0 flex items-center justify-center text-black font-bold text-sm">
              {batteryLevel !== null ? `${batteryLevel}%` : "N/A"}
            </div>
            <div className="absolute -right-1 top-1/4 bottom-1/4 w-1 bg-zinc-800 rounded-r-sm"></div>
          </div>
          {charging && <Zap size={24} className="text-green-500" />}
        </div>

        {!batterySupported && (
          <p className="text-center text-red-500">
            Battery status is not supported in this browser.
          </p>
        )}

        <div className="flex items-center justify-center space-x-2">
          <Wifi size={24} className="text-blue-500" />
          <span className="text-sm font-semibold">
            {internetSpeed !== null ? `${internetSpeed} Mbps` : "Measuring..."}
          </span>
        </div>

        <p className="text-center text-sm text-zinc-700 dark:text-zinc-300 font-semibold">
          Connection:{" "}
          {connectionType.charAt(0).toUpperCase() + connectionType.slice(1)}
        </p>
      </div>
    </div>
  );
};

export default BatteryAndInternetStatus;
