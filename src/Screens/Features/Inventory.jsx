import { inventoryImg } from "../../Assets"


const InventoryControl = () => {
    return (
        <div className="flex flex-row gap-[80px] md:flex-col md:gap-[36px] items-center sm:px-6">
        <div className="flex flex-col gap-[12px]">
            <p className="text-[44px] sm:text-[24px] md:text-center font-semibold">Inventory Management</p>
            <p className="text-[24px] sm:text-[14px] sm:text-center font text-[#606060]">Experience the ease of managing your inventory with SuperSync, enabling you to effortlessly track stock levels and maintain optimal inventory control with intuitive tools.</p>
            </div>

            <div className="w-full">
                <img src={inventoryImg} alt="" />
            </div>
        </div>
    )
}


export default InventoryControl