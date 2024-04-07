
export const PricingCard = (reqProps: any) => (
    <div className="p-2 bg-gray-900 rounded-b-lg">
        <div className="flex items-baseline text-gray-100">
            <span className="text-2xl font-semibold">$</span>
            <span className="text-3xl font-extrabold tracking-tight">{reqProps.cost}</span>
            <span className="ms-0.5 text-xl font-normal text-gray-400">/{reqProps.per}</span>
        </div>

        <div className="mt-2.5">
            <h5 className="w-max bg-gray-100 text-gray-800 text-xs font-semibold font-medium me-2 px-2 py-0.5 rounded">Description</h5>
            <p className="text-gray-100 text-sm ms-1 mt-1">{reqProps.description}</p>
        </div>
    </div>
);