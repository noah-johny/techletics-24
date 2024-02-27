"use client";

import SectionLayout from "@/layouts/section-layout";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import Title from "@/components/title";
import { CustomSelect, CustomText } from "@/components/custom";
import { useState } from "react";
import CustomButton from "@/components/custom/button";
import Success from "./_components/success";
import imageCompression from 'browser-image-compression';
import Fail from "./_components/fail";

export default function AlumniPage() {
  const passoutYears = ["2019", "2020", "2021", "2022", "2023"];
  const [loading, setLoading] = useState(false);
  const [modalSuccess, setModalSuccess] = useState(false);
  const [modalFail, setModalFail] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [passout_year, setPassoutYear] = useState("2019");
  const [file, setFile] = useState<Blob>();
  const [displayButton, setDisplayButton] = useState(false)
  async function handleSubmit(e: any) {
    setDisplayButton(true);
    setLoading(true);
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone_no", phone);
    formData.append("file", file as Blob);
    formData.append("passout_year", passout_year);
    console.log(formData)
    const response: any = await fetch("https://alumniregistration-production.up.railway.app/alumni", {
      method: "POST",
      body: formData
      // Handle form submission
    })
    const data = await response.json()
    console.log(data)

    if (response.ok) {
      setLoading(false);
      setModalSuccess(true);
      console.log(loading);
      // alert("Submitted successfully")
    }
    else {
      setLoading(false);
      setModalFail(true);
      console.log(loading);
      // alert("Submission failed")
    }

    setName("");
    setEmail("");
    setPhone("");
    setFile(undefined);
    setPassoutYear("");
  }
  async function handleImageUpload(event: any) {

    const imageFile = event.target.files[0];
    console.log('originalFile instanceof Blob', imageFile instanceof Blob); // true
    console.log(`originalFile size ${imageFile.size / 1024 / 1024} MB`);

    const options = {
      maxSizeMB: 1.5,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
    }
    try {
      const compressedFile = await imageCompression(imageFile, options);
      console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
      console.log(`compressedFile size ${compressedFile.size / 1024 / 1024} MB`); // smaller than maxSizeMB
      setFile(compressedFile); // write your own logic
    } catch (error) {
      console.log(error);
    }

  }
  return (
    <>
      <div className="mt-[72px] sm:mt-[88px] xl:mt-24"></div>
      <Title title="alumni" />
      <SectionLayout full imageContent>
        <form className="bg-tertiary px-4 py-6 font-secondary text-secondary sm:px-8 sm:py-12 lg:px-16 lg:py-20" onSubmit={handleSubmit}>
          <CustomText highlightedTitle>
            <span className="whitespace-normal">registration form</span>
          </CustomText>

          <div className="my-12 flex flex-col gap-12">
            {/* Full Name */}
            <div className="flex-1">
              <label
                htmlFor="name"
                className="block text-xl font-semibold text-secondary md:text-2xl xl:text-3xl"
              >
                Full Name
              </label>
              <div className="mt-2 flex min-w-64 rounded-md ring-1 ring-secondary hover:ring-primary focus:ring-0">
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  autoComplete="name"
                  className="block flex-1 border-0 bg-transparent py-3 pl-4 text-sm text-secondary placeholder:text-gray-500 sm:text-lg"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-6">
              {/* Email Address */}
              <div className="flex-1">
                <label
                  htmlFor="email"
                  className="block text-xl font-semibold text-secondary md:text-2xl xl:text-3xl"
                >
                  Email Address
                </label>
                <div className="mt-2 flex min-w-64 rounded-md ring-1 ring-secondary hover:ring-primary">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    required
                    autoComplete="email"
                    className="block flex-1 border-0 bg-transparent py-3 pl-4 text-secondary placeholder:text-gray-500 sm:text-lg"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div className="flex-1">
                <label
                  htmlFor="phone_number"
                  className="block text-xl font-semibold text-secondary md:text-2xl xl:text-3xl"
                >
                  Phone Number
                </label>
                <div className="mt-2 flex min-w-64 rounded-md ring-1 ring-secondary hover:ring-primary">
                  <input
                    type="tel"
                    name="phone_number"
                    id="phone_number"
                    autoComplete="phone_number"
                    required
                    className="block flex-1 border-0 bg-transparent py-3 pl-4 text-secondary placeholder:text-gray-500 sm:text-lg"
                    placeholder="Enter your phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-6">
              {/* Photo */}
              <div className="flex-1">
                <label
                  htmlFor="photo"
                  className="block text-xl font-semibold text-secondary md:text-2xl xl:text-3xl"
                >
                  Photo
                </label>
                <div className="flex items-center justify-center gap-x-3">
                  <UserCircleIcon
                    className="h-24 w-24 text-quarternary"
                    aria-hidden="true"
                  />
                  <div className="flex items-start justify-center flex-col">
                    <input type="file" onChange={(e) => e.currentTarget.files && handleImageUpload(e)} />
                    <span className="text-wrap">*image size should be less than 2MB</span>
                  </div>
                </div>

              </div>
              {/* Passout Year */}
              <div className="flex-1">
                <label
                  htmlFor="passout"
                  className="block text-center text-xl font-semibold text-secondary md:text-left md:text-2xl xl:text-3xl"
                >
                  Passout Year
                </label>
                <CustomSelect
                  value={passout_year}
                  onChange={(e) => setPassoutYear(e.target.value)}
                  id="passout"
                  name="passout"
                  required
                  className="mx-auto mt-2 block flex-1 bg-transparent py-3 text-xl font-semibold text-secondary md:mx-0"
                >
                  {passoutYears.map((year) => (
                    <option key={year} value={year} className="cursor-pointer">
                      {year}
                    </option>
                  ))}
                </CustomSelect>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <CustomButton
              type="reset"
              className="text-md font-semibold sm:text-lg"
              onClick={() => {
                setName("");
                setEmail("");
                setPhone("");
                setFile(undefined);
                setPassoutYear("");
              }}
            >
              Reset
            </CustomButton>
            <CustomButton
              disabled={displayButton}
              type="submit"
              className="text-md rounded-md flex items-center justify-center gap-2 bg-primary px-4 py-2 font-semibold text-tertiary sm:px-6 sm:text-lg"
            >
              Submit
              {
                loading ? (
                  <div role="status">
                    <svg aria-hidden="true" className="inline w-4 h-4 text-gray-200 animate-spin dark:text-black fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                    </svg>
                  </div>
                ) : null
              }
            </CustomButton>
          </div>
        </form>
      </SectionLayout>
      {modalSuccess ? <Success /> : null}
      {modalFail ? <Fail /> : null}
    </>
  );
}
