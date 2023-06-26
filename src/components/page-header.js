
export default function PageHeader({ headline, actions }) {

    return <div className="bg-white shadow relative">
        <div className="lg:mx-auto lg:max-w-6xl">
            <div className="py-3 md:flex md:items-center md:justify-between lg:border-t lg:border-gray-200">
                <div className="min-w-0 flex-1">
                    <div className="flex items-center">
                        <div>
                            <div className="flex flex-col lg:p-0 p-2">
                                <h1 className="text-2xl font-bold leading-7 text-neutral-800 sm:truncate sm:leading-9">
                                    {headline}
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-6 flex space-x-3 md:mt-0 md:ml-4">
                    {actions}
                </div>
            </div>
        </div>
    </div>
}