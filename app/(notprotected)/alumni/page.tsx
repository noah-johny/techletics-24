"use client";

import SectionLayout from "@/layouts/section-layout";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import Title from "@/components/title";
import { CustomLink, CustomSelect, CustomText } from "@/components/custom";
import { useState } from "react";
import CustomButton from "@/components/custom/button";

export default function AlumniPage() {
  const passoutYears = ["2019", "2020", "2021", "2022", "2023"];
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [passout_year, setPassoutYear] = useState("");
  const [file, setFile] = useState<Blob>();
  async function handleSubmit(e: any) {
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
      alert("Submitted successfully")
    }
    else {
      alert("Submission failed")
    }

    setName("");
    setEmail("");
    setPhone("");
    setFile(undefined);
    setPassoutYear("");
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
                <div className="flex items-center gap-x-3">
                  <UserCircleIcon
                    className="h-24 w-24 text-quarternary"
                    aria-hidden="true"
                  />
                  <input type="file" onChange={(e) => e.currentTarget.files && setFile(e.currentTarget.files[0])} />
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
              type="submit"
              className="text-md rounded-md bg-primary px-4 py-2 font-semibold text-tertiary sm:px-6 sm:text-lg"
            >
              Submit
            </CustomButton>
          </div>
        </form>
      </SectionLayout>
    </>
  );
}
