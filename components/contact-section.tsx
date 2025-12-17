"use client";

import { useFadeUp } from "@/hooks/use-fade-up";
import ContactForm from "@/components/contact-form";

export default function ContactSection() {
    const { ref, isVisible } = useFadeUp();

    return (
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm">
            <div className="max-w-3xl mx-auto">
                <div
                    ref={ref}
                    className={`space-y-8 transition-all duration-1000 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                >
                    <div className="text-center space-y-4">
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
                            お問い合わせ
                        </h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            プロジェクトについてのご質問やご相談など、お気軽にお問い合わせください。
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    );
}
