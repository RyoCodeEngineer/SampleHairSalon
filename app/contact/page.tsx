"use client";

import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { Textarea } from "@/components/ui/Textarea";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // ここでフォームデータを処理します（例：APIに送信）
    console.log("Form submitted:", formData);
    // フォーム送信後の処理（例：成功メッセージの表示）
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".scroll-reveal");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-6xl font-serif tracking-tight mb-16 text-center">
          <span className="block text-outline">CONTACT</span>
          <span className="block text-gradient">US</span>
        </h1>
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md scroll-reveal">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="name" className="text-mocha-700">
                お名前
              </Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 w-full border-mocha-300 focus:border-primary focus:ring-primary"
              />
            </div>
            <div>
              <Label htmlFor="email" className="text-mocha-700">
                メールアドレス
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 w-full border-mocha-300 focus:border-primary focus:ring-primary"
              />
            </div>
            <div>
              <Label htmlFor="message" className="text-mocha-700">
                お問い合わせ内容
              </Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="mt-1 w-full border-mocha-300 focus:border-primary focus:ring-primary"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-gradient hover:bg-primary-dark text-white font-bold py-2 px-4 rounded-full"
            >
              送信
            </Button>
          </form>
        </div>
      </div>
    </Layout>
  );
}
