
---

## 🔧 ইনস্টলেশন

প্রথমে টার্মিনালে এই কমান্ডগুলো চালাও 👇

```bash
npm install react-hook-form @hookform/resolvers yup
npm install tailwindcss @tailwindcss/vite
```

---
```jsx
// File: RHFExample.jsx
```

এই ফাইলের নাম। শুধু নোট — বাস্তবে তোমার প্রোজেক্টে এই লাইন থাকাই দরকার না, এটা কনটেক্সটের জন্য।

```jsx
import React from "react";
```

React ইম্পোর্ট করা হচ্ছে। নতুন React ভার্সনে JSX-ট্রান্সফর্ম থাকলে বাধ্যতামূলক না হলেও অনেক প্রজেক্টে এটা রাখাই হয় — ক্লিয়ার এবং কম্পোনেন্ট বানাতে সাহায্য করে।

```jsx
import { useForm } from "react-hook-form";
```

`react-hook-form` থেকে `useForm` হুক ইম্পোর্ট করা হচ্ছে।
`useForm` হলো ফর্মের সব স্টেট, ভ্যালিডেশন, হেল্পারস দেয় — মূল হুক।

```jsx
import { yupResolver } from "@hookform/resolvers/yup";
```

`@hookform/resolvers` থেকে `yupResolver` ইম্পোর্ট করা হচ্ছে।
এটি `react-hook-form` কে Yup-এর স্কিমা-ভ্যালিডেশনের সাথে কানেক্ট করে — মানে ভ্যালিডেশন লজিককে Yup-এ লিখে তা সরাসরি useForm-এ চালানো যাবে।

```jsx
import * as yup from "yup";
```

Yup লাইব্রেরিকে ইম্পোর্ট করে সম্পূর্ণ নাম `yup` হিসেবে নেয়া হচ্ছে।
Yup দিয়ে তুমি স্কিমা-ভ্যালিডেশন লিখবে (স্ট্রিং, নেস্টেড অবজেক্ট, কাস্টম মেসেজ ইত্যাদি সহজ)।

```jsx
// ✅ 1️⃣ Yup স্কিমা ডিফাইন করা
const schema = yup.object({
  email: yup
    .string()
    .email("সঠিক ইমেইল দিন")
    .required("ইমেইল লাগবে"),
  password: yup
    .string()
    .min(6, "কমপক্ষে ৬ অক্ষর দিন")
    .required("পাসওয়ার্ড লাগবে"),
});
```

**উপরের ব্লকের ব্যাখ্যা (লাইনগুলো ভাঙলে):**

* `const schema = yup.object({...})` — একটা Yup অবজেক্ট স্কিমা বানাচ্ছে, যেখানে ফর্মের প্রতিটি ফিল্ডের রুল থাকবে।
* `email: yup.string().email("সঠিক ইমেইল দিন").required("ইমেইল লাগবে")` — `email` ফিল্ডকে: স্ট্রিং, ইমেইল ফরম্যাট হতে হবে (ভুল হলে `"সঠিক ইমেইল দিন"` মেসেজ), এবং অবশ্যই থাকতে হবে (required হলে `"ইমেইল লাগবে"` মেসেজ)।
* `password: yup.string().min(6, "কমপক্ষে ৬ অক্ষর দিন").required("পাসওয়ার্ড লাগবে")` — পাসওয়ার্ড স্ট্রিং হতে হবে, ন্যূনতম 6 অক্ষর, এবং required।
  **কেন:** এক জায়গায় সব রুল রাখলে বড় ফর্মে maintain করা সহজ হয়, কম্পোজিবিলিটি ভালো থাকে, এবং UI-তে readable error মেসেজ পাওয়া যায়।

```jsx
function RHFExample() {
```

React functional component ডিফাইন করা শুরু হয়েছে — `RHFExample` নাম। তোমার UI ও লজিক এই ফাংশনের ভিতরে থাকবে।

```jsx
  // ✅ 2️⃣ useForm সেটআপ Yup resolver সহ
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema), // Yup ভ্যালিডেশন কানেক্ট
    mode: "onTouched", // টাচ করার পর ভ্যালিডেশন হবে
  });
```

**এই ব্লকের ভাঙা ব্যাখ্যা:**

* `useForm({...})` কল করে আমরা বেশকিছু ইউটিলিটি নিচ্ছি (ডেসট্রাকচারিং)।
* `resolver: yupResolver(schema)` — এখানে আমরা Yup স্কিমাকে `react-hook-form`-এর সাথে জুড়ছি; ফলে সাবমিশন বা ভ্যালিডেশনের সময়ে Yup-র নিয়মগুলো চালানো হবে।
* `mode: "onTouched"` — ভ্যালিডেশন কখন রান করবে সেটা কন্ট্রোল করে; `"onTouched"` মানে ইউজার ইনপুটে ফোকাস করে বের হলে ভ্যালিডেশন দেখাবে। বিকল্প আছে: `"onSubmit"`, `"onChange"`, `"onBlur"` ইত্যাদি।
* আমরা যে ভ্যালুগুলো নিচ্ছি:

  * `register` — ইনপুটগুলো রেজিস্টার করতে ব্যবহৃত ফাংশন (name, validation rules ইত্যাদি bind করে)।
  * `handleSubmit` — সাবমিট ইভেন্ট হ্যান্ডল করে; ভ্যালিড হলে তোমার `onSubmit` কল করে।
  * `reset` — ফর্ম রিসেট করার ফাংশন (ইনপুট ক্লিয়ার বা default values রিস্টোর করতে)।
  * `formState: { errors, isSubmitting }` — ফর্মের স্টেট থেকে `errors` (ভ্যালিডেশন এরর অবজেক্ট) এবং `isSubmitting` (সাবমিশন চললে true) নিচ্ছি।

```jsx
  // ✅ 3️⃣ সাবমিট হ্যান্ডলার
  const onSubmit = async (data) => {
    console.log("✅ ফর্ম ডেটা:", data);

    // ডেমো হিসেবে লোডিং দেখানোর জন্য delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    alert("ফর্ম সাবমিট সফল!");
    reset(); // ফর্ম রিসেট
  };
```

**ব্যাখ্যা লাইন-বাই-লাইন:**

* `const onSubmit = async (data) => { ... }` — সাবমিট সফল হলে `handleSubmit` এই ফাংশনকে `data` (ফর্ম ভ্যালুজ) সহ কল করবে। `async` রাখা হয়েছে যাতে সার্ভার-কল সিমুলেট বা await করা যায়।
* `console.log("✅ ফর্ম ডেটা:", data);` — ডেভেলপমেন্টের জন্য কনসোল লগ; নিশ্চিত হওয়া যাবে কি ডেটা আসছে।
* `await new Promise((resolve) => setTimeout(resolve, 1000));` — ১ সেকেন্ড ডিলে; এখানে শুধু UI-তে লোডিং দেখানোর জন্য। বাস্তবে তুমি এখানে `fetch`/`axios` কল করবে।
* `alert("ফর্ম সাবমিট সফল!");` — সফলতার বার্তা দেখাচ্ছে।
* `reset();` — সাবমিটের পর ফর্মের ইনপুটগুলো রিসেট করে দেয় (default values না দিলে খালি হবে)।

```jsx
  // ✅ 4️⃣ JSX অংশ
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-sm mx-auto mt-10 p-6 border rounded-2xl shadow-md space-y-4 bg-gray-50"
    >
```

**ব্যাখ্যা:**

* `<form onSubmit={handleSubmit(onSubmit)}>` — ফর্ম সাবমিট ইভেন্টে `handleSubmit(onSubmit)` পাস করা। `handleSubmit` প্রথমে ভ্যালিডেশন চালাবে; ভ্যালিড হলে `onSubmit` কল করবে, নাহলে `errors` আপডেট করবে।
* `className="..."` — Tailwind CSS ক্লাস; লেআউট এবং স্টাইলিং (সেন্টার, মার্জিন, প্যাডিং, বর্ডার, রাউন্ডেড, শ্যাডো, ব্যাকগ্রাউন্ড) দেয়। স্টাইলিং অপশন; যদি Tailwind না থাকে, এই ক্লাস কাজ করবে না — তবে কোডের লজিক অপরিবর্তিত থাকবে।

```jsx
      <h2 className="text-xl font-semibold text-center mb-4">🔐 React Hook Form Example</h2>
```

শিরোনাম; UI-এর জন্য। Tailwind দিয়ে টাইপোগ্রাফি স্টাইলিং করা হয়েছে।

```jsx
      {/* Email Field */}
      <div>
        <label className="block font-medium mb-1">Email</label>
        <input
          {...register("email")}
          type="email"
          placeholder="example@gmail.com"
          autoFocus
          className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 ${
            errors.email ? "border-red-500 focus:ring-red-300" : "focus:ring-blue-300"
          }`}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>
```

**এই ব্লকের ব্যাখ্যা:**

* `<label>` — ফিল্ড লেবেল; অ্যাক্সেসিবিলিটি ভালো করতে চান তাহলে `htmlFor` দিয়ে ইনপুটের `id` লাগাতে পারো। এখানে সরল লেবেল।
* `<input {...register("email")} type="email" ... />` — ইনপুটকে `register("email")` দিয়ে রেজিস্টার করা হচ্ছে। `register` ইনপুটে প্রয়োজনীয় props (name, ref, onChange ইত্যাদি) অ্যাটাচ করে দেয়।

  * `type="email"` — ব্রাউজার-ভিত্তিক ইনপুট টাইপ; ফোন/কীবোর্ড আচরণ প্রভাবিত করে।
  * `placeholder` — প্রম্পট টেক্সট।
  * `autoFocus` — কম্পোনেন্ট লোড হলে এই ইনপুটে ফোকাস যাবে।
  * `className={...}` — টেইলওয়াইন্ড ক্লাস ব্যবহার করে স্টাইল; কন্ডিশনাল স্টাইলিং: যদি `errors.email` থাকে তাহলে লাল বর্ডার এবং ফোকাস রিং দেখাবে, নাহলে নীল রিং।
* `{errors.email && <p>...{errors.email.message}</p>}` — যদি `errors.email` truthy হয় (মানে Yup বা register-র রুলে ভ্যালিডেশন এরর আছে), তাহলে `errors.email.message` দেখাবে (যা আমরা Yup-এ দিয়েছি, উদাহরণ: "ইমেইল লাগবে" বা "সঠিক ইমেইল দিন")।

**টিপ:** এখানে `register("email")`-এ আলাদা রুল দেয়া হয়নি কারণ আমরা Yup স্কিমায় সব রুল রাখেছি — এটি schema-driven validation pattern।

```jsx
      {/* Password Field */}
      <div>
        <label className="block font-medium mb-1">Password</label>
        <input
          {...register("password")}
          type="password"
          placeholder="********"
          className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 ${
            errors.password ? "border-red-500 focus:ring-red-300" : "focus:ring-blue-300"
          }`}
        />
        {errors.password && (
          <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
        )}
      </div>
```

**একই ধাঁচে ব্যাখ্যা (পাসওয়ার্ড ফিল্ড):**

* `register("password")` — পাসওয়ার্ড ইনপুট রেজিস্টার করছে; ভ্যালিডেশনটি Yup স্কিমা থেকে হবে।
* `type="password"` — ইনপুট মান লুকায়।
* কন্ডিশনাল ক্লাস ও এরর মেসেজ দেখানো হয়েছে।
* `errors.password.message` — Yup থেকে পাওয়া কাস্টম মেসেজ (উদা: "কমপক্ষে ৬ অক্ষর দিন") রেন্ডার হবে।

```jsx
      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg font-semibold transition-all"
      >
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}
```

**ব্রেকডাউন:**

* `<button type="submit">` — সাবমিট বাটন; `type="submit"` না হলে বাটন ডিফল্টভাবে সাবমিট নাও করতে পারে।
* `disabled={isSubmitting}` — সাবমিশন চলাকালীন বাটন disable করে দেয়; `isSubmitting` `react-hook-form` এর বিল্ট-ইন স্টেট যা `handleSubmit` চালু হলে true হয় যতক্ষণ `onSubmit` promise resolve না করে। এতে duplicate সাবমিশন বাধা পায়।
* `{isSubmitting ? "Submitting..." : "Submit"}` — রিয়েল-টাইম বাটন লেবেল পরিবর্তন করে ইউজারকে জানায় যে সাবমিট চলছে।
* পরে `</form>` ক্লোজ করে এবং ফাংশন শেষ।

```jsx
export default RHFExample;
```

কম্পোনেন্টটি ডিফল্ট এক্সপোর্ট করা হলো — যাতে অন্য ফাইল থেকে `import RHFExample from "./RHFExample"` করে ব্যবহার করতে পারো।

---

## অতিরিক্ত নোটস — ব্যবহারিক টিপস (বাংলায়)

1. **Why use Yup + resolver?**

   * বড় ফর্ম হলে ভ্যালিডেশন লজিক আলাদা স্কিমায় রাখলে readable ও reusable হয়। রেজলভার দিয়ে `react-hook-form` সহজেই সেটাকে রেসপেক্ট করে।
2. **mode: "onTouched"** বনাম অন্য মোড:

   * `onSubmit` => শুধু সাবমিটে চেক করবে।
   * `onChange` => টাইপ করার সময়ই চেক করবে (রিয়েল-টাইম) — ছোট ফিল্ডে ভালো, বড় ক্ষেত্রে noisy হতে পারে।
   * `onBlur` বা `onTouched` => ফোকাস থেকে বের হলে চেক করে — ইউজার-ফ্রেন্ডলি।
3. **errors structure:**

   * `errors` একটি অবজেক্ট যেখানে ফিল্ডের নাম key এবং ভ্যালু হিসেবে `{ message, type, ref }` আছে (resolver ব্যবহার করলে message Yup থেকে আসে)।
4. **register vs Controller:**

   * সাধারণ ইনপুটগুলো (`input`, `select`) `register` দিয়ে সহজে কাজ করে (uncontrolled)।
   * যদি তুমি custom UI লাইব্রেরি (e.g. React Select, MUI TextField with complex behavior) ব্যবহার করো, তখন `Controller` কম্পোনেন্ট ব্যবহার করবে — তা controlled inputs-কে handle করে।
5. **Server-side errors:**

   * সার্ভার থেকে ভ্যালিডেশন এরর এলে `setError("email", { type: "server", message: "Already taken" })` দিয়ে UI-তে দেখাতে পারো।
6. **Accessibility (a11y):**

   * লেবেলকে ইনপুটের সাথে `htmlFor` ও `id` দিয়ে যুক্ত করো; এরর বার্তা `aria-live="polite"` দিলে screen reader ভালো জানায়।

---

চাইলে আমি এখন এই ফাইলের উপর ভিত্তি করে ৩টা ছোট-ছোট উন্নয়ন করে দেখাই:
A) সার্ভার-ভিত্তিক এরর হ্যান্ডলিং example (setError)
B) React Select/MUI মতো controlled কম্পোনেন্টের জন্য `Controller` ব্যাখ্যা ও কোট
C) এই ফর্মের tests (React Testing Library) — যাতে তুমি ফর্ম ভ্যালিডেশন অটোমেটেডভাবে টেস্ট করতে পারো

কোনটা প্রথমে দেখাতে চাইবে? বা আমি উপরের বিষয়গুলোতে আরো ডিটেইল দিয়ে চালিয়ে যাই?
