import {useEffect, useState} from "react";

const FULL_CIRCLE = 360;
const INITIAL_OFFSET_DEGREES = 270;

export default function OldClockMenu ({ navItems } : string[]) {

    const itemDegree = Math.floor(FULL_CIRCLE / navItems.length);

    // work for rotate
    const [currentOffset, setCurrentOffset] = useState(INITIAL_OFFSET_DEGREES);
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    useEffect(() => {
        console.log(currentOffset);
    }, [currentOffset]);

    const handleOffset = (index : number) : void => {
        const newOffset :number = INITIAL_OFFSET_DEGREES - (itemDegree * index);
        setCurrentOffset(newOffset);
        setCurrentIndex(index);
    }

    return (
        <div className={"bg-black flex justify-center relative rounded-[50%] w-[2.5rem] h-[2.5rem]"}>
            {navItems.map((item : string, index : number) => (
                <div
                    style={{
                        transform: `rotate(${currentOffset + (itemDegree * index)}deg)`,
                        transformOrigin: "0%, 0%",
                        transition: "transform 1s ease"
                    }}
                    className={`absolute h-[100%] w-[1rem]`}
                >
                    <div className={"relative h-[170%] flex justify-end items-end w-full"}>
                        <div
                            style={{
                                transform: `rotate(${FULL_CIRCLE - currentOffset - (itemDegree * index)}deg)`,
                                transition: "transform 1s ease"
                            }}
                            className={"rounded-[50%] relative flex select-none flex-row cursor-pointer text-xs px-2 p-1 bg-black text-white font-bold"}
                            onClick={() => handleOffset(index)}
                        >
                            {String(item)[0]}
                            <div
                                style={{
                                    transition: "opacity 1s ease",
                                }}
                                className={`${currentIndex === index ? "opacity-100" : "opacity-0"} text-sm overflow-visible absolute top-[0] left-[105%] text-black`}
                            >
                                {item.slice(1)}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}