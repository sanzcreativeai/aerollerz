"use client";
import { site, waLink } from "@/lib/site";

export default function FloatingActions() {
  return (
    <div className="fixed bottom-5 left-4 z-40 z-fab flex flex-col gap-3">
      <a aria-label="Chat on WhatsApp" href={waLink()} target="_blank" rel="noopener noreferrer"
         className="pulse-ring flex items-center justify-center rounded-full shadow-xl hover:scale-110 transition" style={{ width: 56, height: 56, background: "#25D366" }}>
        <svg width="30" height="30" viewBox="0 0 32 32" fill="white" aria-hidden>
          <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.406-.545-.489-1.09-1.228-1.483-1.845a.654.654 0 0 1-.133-.366c0-.4.571-.597.874-1.248.098-.21.075-.464-.063-.675-.142-.21-.618-1.418-.84-1.891-.16-.344-.421-.449-.75-.449l-.431.011c-.161.011-.284.044-.413.086-.157.052-.324.148-.449.263-.299.28-.994.904-.994 2.284 0 1.238.885 2.465 1.009 2.636.109.159 2.095 3.368 5.142 4.653 2.429 1.023 2.934.996 3.449.996.655 0 2.056-.715 2.339-1.483.249-.657.249-1.223.249-1.316 0-.094-.044-.159-.146-.212-.123-.082-.278-.157-.483-.253-.207-.093-1.242-.69-1.439-.783-.196-.082-.344-.123-.481-.123zM16.001 29.264c-7.321 0-13.257-5.936-13.257-13.257S8.680 2.750 16.001 2.750 29.258 8.686 29.258 16.007s-5.936 13.257-13.257 13.257zm0-24.014c-5.919 0-10.757 4.838-10.757 10.757 0 2.077.603 4.016 1.638 5.654L5.57 25.835l3.374-1.095a10.72 10.72 0 0 0 7.056 2.639c5.919 0 10.757-4.838 10.757-10.757S21.92 5.25 16.001 5.25z"/>
        </svg>
      </a>
      <a aria-label={`Call ${site.phone}`} href={site.phoneHref}
         className="flex items-center justify-center rounded-full bg-[#0a0e1a] text-white shadow-xl hover:scale-110 transition" style={{ width: 56, height: 56 }}>
        <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M20 15.5a16 16 0 0 1-5.3-.8 1 1 0 0 0-1 .2l-2.2 2.2a15.1 15.1 0 0 1-6.6-6.6L7 8.3a1 1 0 0 0 .3-1 16 16 0 0 1-.9-5.3A1 1 0 0 0 5.4 1H2a1 1 0 0 0-1 1 19 19 0 0 0 19 19 1 1 0 0 0 1-1v-3.4a1 1 0 0 0-1-1z" /></svg>
      </a>
    </div>
  );
}
