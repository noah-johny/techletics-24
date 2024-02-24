import SectionLayout from "@/layouts/section-layout";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import Title from "@/components/title";
import { CustomLink, CustomSelect, CustomText } from "@/components/custom";

export default function AluminiPage() {
  const passoutYears = [2019, 2020, 2021, 2022, 2023];

  return (
    <>
      <div className="mt-[72px] sm:mt-[88px] xl:mt-24"></div>
      <Title title="alumini" />
      <SectionLayout full imageContent>
        <form className="bg-tertiary px-4 py-6 font-secondary text-secondary sm:px-8 sm:py-12 lg:px-16 lg:py-20">
          <CustomText highlightedTitle>
            <span className="whitespace-normal">registration form</span>
          </CustomText>

          <div className="my-12 flex flex-col gap-12">
            {/* Full Name */}
            <div className="flex-1">
              <label
                htmlFor="fullname"
                className="block text-xl font-semibold text-secondary md:text-2xl xl:text-3xl"
              >
                Full Name
              </label>
              <div className="mt-2 flex min-w-64 rounded-md ring-1 ring-secondary hover:ring-primary focus:ring-0">
                <input
                  type="text"
                  name="fullname"
                  id="fullname"
                  autoComplete="fullname"
                  className="block flex-1 border-0 bg-transparent py-3 pl-4 text-sm text-secondary placeholder:text-gray-500 sm:text-lg"
                  placeholder="Enter your full name"
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
                    autoComplete="email"
                    className="block flex-1 border-0 bg-transparent py-3 pl-4 text-secondary placeholder:text-gray-500 sm:text-lg"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div className="flex-1">
                <label
                  htmlFor="email"
                  className="block text-xl font-semibold text-secondary md:text-2xl xl:text-3xl"
                >
                  Phone Number
                </label>
                <div className="mt-2 flex min-w-64 rounded-md ring-1 ring-secondary hover:ring-primary">
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    autoComplete="phone"
                    className="block flex-1 border-0 bg-transparent py-3 pl-4 text-secondary placeholder:text-gray-500 sm:text-lg"
                    placeholder="Enter your phone number"
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
                  <CustomLink
                    href=""
                    className="sm:text-md rounded-md bg-secondary px-4 py-2 text-sm font-semibold text-tertiary sm:px-6"
                  >
                    Upload Image
                  </CustomLink>
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
                  id="passout"
                  name="passout"
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

            {/* Suggestions */}
            <div className="flex-1">
              <label
                htmlFor="suggestions"
                className="block text-xl font-semibold text-secondary md:text-2xl xl:text-3xl"
              >
                Suggestions
              </label>
              <div className="mt-2 flex min-w-64 rounded-md ring-1 ring-secondary hover:ring-primary">
                <textarea
                  id="suggestions"
                  name="suggestions"
                  rows={3}
                  className="block flex-1 border-0 bg-transparent py-3 pl-4 text-secondary placeholder:text-gray-500 sm:text-lg"
                  placeholder={"Give your suggestions here..."}
                />
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <CustomLink href="" className="text-md font-semibold sm:text-lg">
              Reset
            </CustomLink>
            <CustomLink
              href=""
              className="text-md rounded-md bg-primary px-4 py-2 font-semibold text-tertiary sm:px-6 sm:text-lg"
            >
              Submit
            </CustomLink>
          </div>
        </form>
      </SectionLayout>
    </>
  );
}
