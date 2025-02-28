"use client";

import React, { useState } from "react";
import Modal from "@/components/modals/Modal";
import useAddPropertyModal from "@/hooks/useAddPropertyModal";
import CustomButton from "@/components/forms/CustomButton";
import Categories from "@/components/addpropery/Categories";
import SelectCountry, { SelectCountryValue } from "../forms/SelectCountry";

const AddPropertyModal = () => {
    const [currentStep, setCurrentStep] = useState(1);

    const [dataCategory, setDataCategory] = useState("");
    const [dataTitle, setDataTitle] = useState("");
    const [dataDescription, setDataDescription] = useState("");
    const [dataPrice, setDataPrice] = useState("");
    const [dataBedrooms, setDataBedrooms] = useState("");
    const [dataBathrooms, setDataBathrooms] = useState("");
    const [dataGuests, setDataGuests] = useState("");
    const [dataCountry, setdataCountry] = useState<SelectCountryValue>();

    const addPropertyModal = useAddPropertyModal();

    const handleCategorySelect = (category: string) => {
        setDataCategory(category);
        console.log("Category selected:", category);
    };

    const content = (
        <>
            {currentStep === 1 ? (
                <>
                    <h2 className="mb-6 text-2xl">Add property details</h2>
                    <Categories
                        dataCategory={dataCategory}
                        setCategory={handleCategorySelect}
                    />
                    <CustomButton
                        label="Next"
                        className="w-full"
                        onClick={() => setCurrentStep(2)}
                    />
                </>
            ) : currentStep === 2 ? (
                <>
                    <h2 className="mb-6 text-2xl">Describe your place</h2>
                    <div className="pt-3 pb-6 space-y-4">
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="title">Title</label>
                            <input
                                id="title"
                                name="title"
                                type="text"
                                className="border border-gray-400 p-4 rounded-xl"
                                value={dataTitle}
                                onChange={(e) => setDataTitle(e.target.value)}
                            />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="description">Description</label>
                            <textarea
                                id="description"
                                name="description"
                                className="border border-gray-400 p-4 rounded-xl"
                                value={dataDescription}
                                onChange={(e) =>
                                    setDataDescription(e.target.value)
                                }
                            />
                        </div>
                    </div>
                    <CustomButton
                        label="Previous"
                        className="w-full mb-2 bg-gray-200 hover:bg-gray-300 !text-black"
                        onClick={() => setCurrentStep(1)}
                    />

                    <CustomButton
                        label="Next"
                        className="w-full"
                        onClick={() => setCurrentStep(3)}
                    />
                </>
            ) : currentStep === 3 ? (
                <>
                    <h2 className="mb-6 text-2xl">Details</h2>
                    <div className="pt-3 pb-6 space-y-4">
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="price">Price per night</label>
                            <input
                                id="price"
                                name="price"
                                type="number"
                                className="border border-gray-400 p-4 rounded-xl"
                                value={dataPrice}
                                onChange={(e) => setDataPrice(e.target.value)}
                            />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="bedrooms">Bedrooms</label>
                            <input
                                id="bedrooms"
                                name="bedrooms"
                                type="number"
                                className="border border-gray-400 p-4 rounded-xl"
                                value={dataBedrooms}
                                onChange={(e) =>
                                    setDataBedrooms(e.target.value)
                                }
                            />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="bathrooms">Bathrooms</label>
                            <input
                                id="bathrooms"
                                name="bathrooms"
                                type="number"
                                className="border border-gray-400 p-4 rounded-xl"
                                value={dataBathrooms}
                                onChange={(e) =>
                                    setDataBathrooms(e.target.value)
                                }
                            />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="guests">
                                Maximum number pf guests
                            </label>
                            <input
                                id="guests"
                                name="guests"
                                type="number"
                                className="border border-gray-400 p-4 rounded-xl"
                                value={dataGuests}
                                onChange={(e) => setDataGuests(e.target.value)}
                            />
                        </div>
                    </div>
                    <CustomButton
                        label="Previous"
                        className="w-full mb-2 bg-gray-200 hover:bg-gray-300 !text-black"
                        onClick={() => setCurrentStep(2)}
                    />

                    <CustomButton
                        label="Next"
                        className="w-full"
                        onClick={() => setCurrentStep(4)}
                    />
                </>
            ) : currentStep === 4 ? (
                <>
                    <h2 className="mb-6 text-2xl">Location</h2>
                    <div className="pt-3 pb-6 space-y-4">
                        <div className="flex flex-col space-y-2">
                            Select location
                            <SelectCountry
                                value={dataCountry}
                                onChange={(value) =>
                                    setdataCountry(value as SelectCountryValue)
                                }
                            />
                        </div>
                    </div>
                    <CustomButton
                        label="Previous"
                        className="w-full mb-2 bg-gray-200 hover:bg-gray-300 !text-black"
                        onClick={() => setCurrentStep(3)}
                    />

                    <CustomButton
                        label="Next"
                        className="w-full"
                        onClick={() => setCurrentStep(5)}
                    />
                </>
            ) : (
                <>
                    <h2 className="mb-6 text-2xl">Upload an image</h2>
                    <div className="pt-3 pb-6 space-y-4">
                        <div className="flex flex-col space-y-2"></div>
                    </div>
                    <CustomButton
                        label="Previous"
                        className="w-full mb-2 bg-gray-200 hover:bg-gray-300 !text-black"
                        onClick={() => setCurrentStep(4)}
                    />

                    <CustomButton
                        label="Add property"
                        className="w-full"
                        onClick={() => console.log("Submit")}
                    />
                </>
            )}
        </>
    );

    return (
        <Modal
            label="Add property"
            close={addPropertyModal.close}
            content={content}
            isOpen={addPropertyModal.isOpen}
        />
    );
};

export default AddPropertyModal;
