#1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
getElementById দিয়ে একটি নির্দিষ্ট ID ধরে এলিমেন্টকে খুঁজে বের করা হয় 
getElementsByClassName দিয়ে নির্দিষ্ট কোনো Class Name দিয়ে সব এলিমেন্টকে খুঁজে বের করে
querySelector দিয়ে  CSS স্টাইলে (যেমন: #id, .class, বা tagName) লিখে প্রথম যে এলিমেন্টটি পায় সেটি রিটার্ন করে
querySelectorAll  অনেকটা querySelector এর মতোই, কিন্তু এটি সিলেক্টরের সাথে মিলে যাওয়া সবগুলো এলিমেন্টকে একটি NodeList হিসেবে রিটার্ন করে

#2. How do you create and insert a new element into the DOM?
DOM=Document Object Model. 
DOM দিয়ে document.createElement('tagName') ব্যবহার করে একটি নতুন এলিমেন্ট মেমোরিতে তৈরি করতে করা যায় 
লেখা বা ক্লাস যোগ করা: এলিমেন্টটি তৈরি করার পর তার ভেতরে innerText দিয়ে কোনো লেখা বসানো যায় এবং classList.add() দিয়ে স্টাইল বা ডিজাইন করার জন্য ক্লাস যোগ করা যায়।


#3. What is Event Bubbling? And how does it work?
ইভেন্ট বাবলিং হলো জাভাস্ক্রিপ্ট ডোম (DOM) এর একটি বিশেষ নিয়ম। যখন কোনো একটি  বাটনে কোনো বাটনে ক্লিক করা হয় তখন সেই ইভেন্টটি শুধু ওই বাটনেই সীমাবদ্ধ থাকে না; সেটি ধীরে ধীরে পানির বুদবুদ বা বাবলের মতো উপরের দিকে তার সব প্যারেন্ট এলিমেন্টের কাছে পৌঁছাতে থাকে

#4. What is Event Delegation in JavaScript? Why is it useful?
ইভেন্ট ডেলিগেশন হলো এমন একটি টেকনিক যেখানে প্রতিটি আলাদা চাইল্ড এলিমেন্টে অনেকগুলো বাটন বা কার্ড আলাদা করে ইভেন্ট লিসেনার না বসিয়ে, তাদের সবার কমন প্যারেন্ট এলিমেন্টে একটি মাত্র ইভেন্ট লিসেনার বসানো হয়। ইভেন্ট বাবলিং-এর সুবিধা ব্যবহার করে এই একটি লিসেনার দিয়েই সব চাইল্ডের কাজ নিয়ন্ত্রণ করা যায়।

#