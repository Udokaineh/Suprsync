import { useState, useEffect } from "react";
import TaskManagement from "./TaskManagement";
import Reports from "./Reports";
import SyncAI from "./SyncAI";
import InventoryControl from "./Inventory";
import Integrations from "./Integrations";


const featureList = [
    { key: "task", text: "Task Management" },
    { key: "reports", text: "Reports" },
    { key: "syncAI", text: "Sync AI" },
    { key: "inventory", text: "Inventory Control" },
    { key: "integrations", text: "Integrations" },
];

const FeaturesNav = () => {
    const [selected, setSelected] = useState("task");

    useEffect(() => {
        const interval = setInterval(() => {
            setSelected((prevSelected) => {
                const currentIndex = featureList.findIndex((feature) => feature.key === prevSelected)
                const nextIndex = (currentIndex + 1) % featureList.length
                return featureList[nextIndex].key
            })
        }, 5000)
        return () => clearInterval(interval)
    }, [])

    const handleSelectChange = (option) => {
        setSelected(option);
    };


    return (
        <div className="flex flex-col gap-[50px] md:gap-[30px]">
            <div className="flex flex-col justify-center items-center md:w-full">
                <ul className="flex flex-row justify-center gap-[40px] cursor-pointer bg-[#F9F9F9] p-3 rounded-[40px] text-[#959595] md:p-[6px] sm:gap-[4px] md:gap-[8px] md:w-full">
                    {featureList.map((feature) => (
                        <li
                            key={feature.key}
                            className={`text-[#959595] ${selected === feature.key ? "selected-class" : "features-class"}`}
                            onClick={() => handleSelectChange(feature.key)}
                        >
                            {feature.text}
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                {selected === "task" && <TaskManagement />}
                {selected === "reports" && <Reports />}
                {selected === "syncAI" && <SyncAI />}
                {selected === "inventory" && <InventoryControl />}
                {selected === "integrations" && <Integrations />}
            </div>
        </div>
    );
};

export default FeaturesNav;
