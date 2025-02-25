import OldClockMenu from "./components/OldClockMenu.tsx";


function App() {
  return (
    <>
        <h1 className={"w-full text-center pt-[4rem] text-xl"}>This page is used to store components I build and test.</h1>
        <div className={"w-full p-[4rem] flex justify-evenly items-center"}>
            <OldClockMenu navItems={[
                "cauler",
                "conner",
                "zac",
                "rupert",
                "pearly",
                "robert"
            ]}/>
        <p
            className={"text-black text-center font-bold"}
        >This component was made as a navigation menu for&nbsp;
                <a
                    href={"https://omenclate.com/"}
                    className={"text-emerald-500"}
                >my photography website.
                </a><br/>It remains unused. The main issue I found with it was the lack of clarity of what each letter meant.<br/>It would be annoying to click through all to discover what each menu item was.
            </p>
        </div>
    </>
  )
}

export default App
