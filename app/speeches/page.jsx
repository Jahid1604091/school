import React from "react";
import minister from "@/app/assets/images/minister.jpg";
import principal from "@/app/assets/images/principal.jpg";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <section className="bg-gray-200 p-6 md:p-16">
      <h2 className="text-2xl md:text-4xl font-bold text-black mb-10">Speech</h2>

      <div className="flex justify-center w-full mb-6">
        <div className="w-full md:w-2/5 border shadow-2xl p-2 text-center">
          <Image
            src={minister}
            alt="minister"
            className="w-full h-auto md:h-[350px]"
          />
          <p className="mt-4 text-green-600 text-xl font-semibold">Vice Chancellor</p> {/* Designation added here */}
        </div>
      </div>

      <div className="w-full text-center md:text-left leading-relaxed">
        <h4 className="text-green-600 text-2xl font-semibold md:text-3xl mb-6">Message from Vice Chancellor</h4>
        <p className="text-gray-600 text-sm leading-loose md:text-lg">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam consequatur ipsam eius, dolor impedit necessitatibus iusto a rerum accusantium alias facere illum harum magni perspiciatis placeat dolorem voluptas tenetur nihil. Iure voluptates aliquam omnis exercitationem tempore impedit quam, illo praesentium deserunt amet eligendi soluta. Consequuntur debitis odit eligendi? Ducimus natus ullam pariatur sint ut, nihil, rerum autem vitae ipsa sapiente voluptatibus sed quo consequuntur? Cumque, temporibus, doloremque quidem ducimus blanditiis natus recusandae enim, rem maxime veniam nulla velit maiores neque consequatur voluptates reprehenderit odit atque molestiae explicabo? Sapiente deleniti a non. Est libero odio dolorem, enim sunt minima velit fuga porro exercitationem sequi placeat! Deleniti aspernatur harum aliquid, unde mollitia enim atque ipsa molestias quae autem doloribus fugit repellendus ipsum veritatis! Modi fuga autem architecto explicabo ipsum maxime sunt quia, provident corporis nihil quaerat repellendus in hic aspernatur deserunt numquam dolorum tenetur recusandae quod? Eveniet eligendi quis ullam neque eaque vero. Doloremque asperiores, quis neque quaerat ullam dignissimos ut repellendus ipsa possimus nobis delectus dolore praesentium officia architecto natus, ab repellat porro iure? Quis modi soluta repudiandae fuga numquam perferendis consequatur natus illo possimus! Ut, rerum beatae. Eum cupiditate itaque vel facere numquam fuga totam repellat iusto! Perspiciatis facilis magnam id harum nostrum obcaecati consequatur rerum commodi? Iste, consequuntur. Alias, tenetur perferendis! Quam voluptate nulla nisi doloribus rem doloremque corrupti officiis porro magni eligendi vitae amet ipsam labore dolorem quis pariatur quisquam odit dignissimos non aspernatur, beatae voluptates aut. Suscipit veritatis error rem, rerum eaque eligendi eius delectus sint cumque, similique officiis consequuntur minima porro a dicta aspernatur fugiat fuga voluptatibus quos optio! Illo, temporibus itaque accusamus dignissimos quisquam pariatur corrupti dolor veritatis asperiores repellat tempore tenetur placeat id aut a nam beatae saepe ipsa blanditiis voluptate sint iste eaque consequuntur. Aliquam quod impedit non atque aliquid possimus, itaque illo.
        </p>
      </div>
    </section>
  );
};

export default page;
