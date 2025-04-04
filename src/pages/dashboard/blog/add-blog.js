// components/BlogEditor.jsx
"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import Link from "@tiptap/extension-link";
import Heading from "@tiptap/extension-heading";
import Image from "@tiptap/extension-image";
import { useState, useRef } from "react";

export default function BlogEditor() {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [metaDesc, setMetaDesc] = useState("");
  const [metaKeywords, setMetaKeywords] = useState("");
  const fileInputRef = useRef(null);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link.configure({ openOnClick: false }),
      Heading.configure({ levels: [1, 2, 3] }),
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      Image,
    ],
    editorProps: {
      attributes: {
        class: "prose max-w-none w-full min-h-[500px] px-4 py-3 outline-none",
      },
    },
    content: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const content = editor?.getHTML();

    const res = await fetch("/api/blog", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        content,
        slug,
        metaDesc,
        metaKeywords,
      }),
    });

    if (res.ok) {
      alert("Blog post published successfully!");
      setTitle("");
      setSlug("");
      setMetaDesc("");
      setMetaKeywords("");
      editor?.commands.setContent("");
    } else {
      alert("Failed to publish the blog post.");
    }
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "cottage_api"); // Your actual preset

    try {
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/di3wwp9s0/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (data.secure_url) {
        editor?.chain().focus().setImage({ src: data.secure_url }).run();
      } else {
        console.error("Cloudinary upload failed:", data);
      }
    } catch (error) {
      console.error("Upload error:", error);
    }
  };

  return (
    <div className="w-full max-w-[95%] mx-auto p-6 bg-white rounded shadow">
      <h1 className="text-3xl font-bold mb-4">Add New Post</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Post Title"
          className="w-full p-2 border rounded text-lg"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Slug (e.g., my-awesome-blog)"
          className="w-full p-2 border rounded text-lg"
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Meta Description"
          className="w-full p-2 border rounded text-lg"
          value={metaDesc}
          onChange={(e) => setMetaDesc(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Meta Keywords (comma separated)"
          className="w-full p-2 border rounded"
          value={metaKeywords}
          onChange={(e) => setMetaKeywords(e.target.value)}
        />

        <div className="border rounded p-4 w-full">
          <div className="flex flex-wrap gap-2 mb-3">
            <button
              type="button"
              onClick={() => editor?.chain().focus().toggleBold().run()}
              className="px-2 py-1 border rounded text-xl"
            >
              B
            </button>
            <button
              type="button"
              onClick={() => editor?.chain().focus().toggleItalic().run()}
              className="px-2 py-1 border rounded text-xl italic"
            >
              I
            </button>
            <button
              type="button"
              onClick={() => editor?.chain().focus().toggleUnderline().run()}
              className="px-2 py-1 border rounded text-xl underline"
            >
              U
            </button>
            <button
              type="button"
              onClick={() => editor?.chain().focus().toggleStrike().run()}
              className="px-2 py-1 border rounded text-xl line-through"
            >
              S
            </button>
            <button
              type="button"
              onClick={() => editor?.chain().focus().toggleBulletList().run()}
              className="px-2 py-1 border rounded text-xl"
            >
              • List
            </button>
            <button
              type="button"
              onClick={() => editor?.chain().focus().toggleOrderedList().run()}
              className="px-2 py-1 border rounded text-xl"
            >
              1. List
            </button>
            <button
              type="button"
              onClick={() => editor?.chain().focus().setParagraph().run()}
              className="px-2 py-1 border rounded text-xl"
            >
              P
            </button>
            <button
              type="button"
              onClick={() =>
                editor?.chain().focus().toggleHeading({ level: 2 }).run()
              }
              className="px-2 py-1 border rounded text-xl"
            >
              H2
            </button>
            <button
              type="button"
              onClick={() => editor?.chain().focus().toggleBlockquote().run()}
              className="px-2 py-1 border rounded text-xl"
            >
              "Quote"
            </button>
            <button
              type="button"
              onClick={() => editor?.chain().focus().setTextAlign("left").run()}
              className="px-2 py-1 border rounded text-xl"
            >
              ⬅
            </button>
            <button
              type="button"
              onClick={() =>
                editor?.chain().focus().setTextAlign("center").run()
              }
              className="px-2 py-1 border rounded text-xl"
            >
              ⬅➡
            </button>
            <button
              type="button"
              onClick={() =>
                editor?.chain().focus().setTextAlign("right").run()
              }
              className="px-2 py-1 border rounded text-xl"
            >
              ➡
            </button>
            <button
              type="button"
              onClick={() => {
                const url = prompt("Enter URL");
                if (url)
                  editor
                    ?.chain()
                    .focus()
                    .setLink({ href: url, target: "_blank" })
                    .run();
              }}
              className="px-2 py-1 border rounded text-xl"
            >
              🔗
            </button>
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="px-2 py-1 border rounded text-xl"
            >
              📤 Upload
            </button>
          </div>

          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            hidden
            onChange={handleFileUpload}
          />

          <EditorContent editor={editor} />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Publish Blog
        </button>
      </form>
    </div>
  );
}
