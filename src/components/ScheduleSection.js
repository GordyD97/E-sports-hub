import React from "react";
import { ChevronRightIcon } from "@heroicons/react/solid";

const ScheduleSection = () => {
    return (
        <div className="bg-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                    Schedule
                </h2>
                <div className="mt-6 space-y-12">
                    <div className="space-y-4">
                        <h3 className="text-lg font-medium leading-6 text-gray-900">
                            Week 1
                        </h3>
                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <p className="text-base text-gray-500">
                                    Monday, 1/1/2023
                                </p>
                                <ChevronRightIcon className="h-5 w-5 text-gray-400" />
                            </div>
                            <div className="flex items-center justify-between">
                                <p className="text-base text-gray-500">
                                    Wednesday, 1/3/2023
                                </p>
                                <ChevronRightIcon className="h-5 w-5 text-gray-400" />
                            </div>
                            <div className="flex items-center justify-between">
                                <p className="text-base text-gray-500">Friday, 1/5/2023</p>
                                <ChevronRightIcon className="h-5 w-5 text-gray-400" />
                            </div>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-lg font-medium leading-6 text-gray-900">
                            Week 2
                        </h3>
                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <p className="text-base text-gray-500">
                                    Monday, 1/8/2023
                                </p>
                                <ChevronRightIcon className="h-5 w-5 text-gray-400" />
                            </div>
                            <div className="flex items-center justify-between">
                                <p className="text-base text-gray-500">
                                    Wednesday, 1/10/2023
                                </p>
                                <ChevronRightIcon className="h-5 w-5 text-gray-400" />
                            </div>
                            <div className="flex items-center justify-between">
                                <p className="text-base text-gray-500">Friday, 1/12/2023</p>
                                <ChevronRightIcon className="h-5 w-5 text-gray-400" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ScheduleSection;
