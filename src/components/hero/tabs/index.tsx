const Tabs = () => {
    return (
        <div className="flex w-max m-auto gap-6">
            {[ 'Study', 'Quiz', 'Test', 'Game', 'Others'].map((link, i) => (
                <div className={`cursor-pointer text-sm font-medium text-slate-500 border-b-2 px-3 py-2 ${i === 0 ? 'text-slate-900 border-b-blue-950': 'hover:text-slate-900 border-b-transparent'}`}>{link}</div>
            ))}
        </div>
    )
}

export default Tabs;