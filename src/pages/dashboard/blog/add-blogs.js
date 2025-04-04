"use client";

import {
  useEditor,
  EditorContent,
  NodeViewWrapper,
  NodeViewContent,
} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import Link from "@tiptap/extension-link";
import Heading from "@tiptap/extension-heading";
import Placeholder from "@tiptap/extension-placeholder";
import TextStyle from "@tiptap/extension-text-style";
import { Extension } from "@tiptap/core";
import { useState, useRef } from "react";
import { Rnd } from "react-rnd";
import { ReactNodeViewRenderer, Node } from "@tiptap/react";

// Font Size Extension
const FontSize = Extension.create({
  name: "fontSize",
  addGlobalAttributes() {
    return [
      {
        types: ["textStyle"],
        attributes: {
          fontSize: {
            default: null,
            parseHTML: (el) => el.style.fontSize?.replace(/['"]+/g, "") || null,
            renderHTML: (attrs) =>
              !attrs.fontSize ? {} : { style: `font-size: ${attrs.fontSize}` },
          },
        },
      },
    ];
  },
  addCommands() {
    return {
      setFontSize:
        (fontSize) =>
        ({ chain }) =>
          chain().setMark("textStyle", { fontSize }).run(),
    };
  },
});

// Custom Resizable Image Component
const ResizableImageComponent = (props) => {
  const { node, updateAttributes, deleteNode } = props;
  const { src, width = 300, height = 200, x = 0, y = 0 } = node.attrs;

  return (
    <NodeViewWrapper style={{ position: "absolute", zIndex: 10 }}>
      <Rnd
        default={{ x, y, width, height }}
        bounds="window"
        enableResizing={{
          bottom: true,
          right: true,
          bottomRight: true,
          top: true,
          topLeft: true,
          topRight: true,
          left: true,
          bottomLeft: true,
        }}
        onDragStop={(e, d) => updateAttributes({ x: d.x, y: d.y })}
        onResizeStop={(e, direction, ref, delta, position) => {
          updateAttributes({
            width: ref.offsetWidth,
            height: ref.offsetHeight,
            x: position.x,
            y: position.y,
          });
        }}
      >
        <div className="relative w-full h-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt=""
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              borderRadius: "6px",
              border: "1px solid #ccc",
            }}
          />
          <button
            onClick={deleteNode}
            className="absolute top-1 right-1 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center"
            style={{ zIndex: 20 }}
          >
            ×
          </button>
        </div>
      </Rnd>
    </NodeViewWrapper>
  );
};

const ResizableImage = Node.create({
  name: "resizableImage",
  group: "block",
  draggable: true,
  atom: true,
  addAttributes() {
    return {
      src: {},
      width: { default: 300 },
      height: { default: 200 },
      x: { default: 0 },
      y: { default: 0 },
    };
  },
  parseHTML() {
    return [{ tag: "resizable-image" }];
  },
  renderHTML({ HTMLAttributes }) {
    return ["resizable-image", HTMLAttributes];
  },
  addNodeView() {
    return ReactNodeViewRenderer(ResizableImageComponent);
  },
});

export default function BlogEditor() {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [metaDesc, setMetaDesc] = useState("");
  const [metaKeywords, setMetaKeywords] = useState("");
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef(null);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      TextStyle,
      FontSize,
      Link.configure({ openOnClick: false }),
      Heading.configure({ levels: [1, 2, 3] }),
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      Placeholder.configure({
        placeholder: "Write your blog content here...",
      }),
      ResizableImage,
    ],
    editorProps: {
      attributes: {
        class:
          "prose max-w-none w-full min-h-[500px] px-4 py-3 outline-none relative z-0 " +
          "prose-a:text-blue-600 prose-p:my-1 prose-li:my-1 prose-h1:my-2 prose-h2:my-2 prose-h3:my-1 " +
          "prose-h1:leading-tight prose-h2:leading-snug prose-h3:leading-snug " +
          "prose-h1:text-[28px] prose-h2:text-[22px] prose-h3:text-[18px] " +
          "prose-p:text-[16px] prose-li:text-[16px] prose-strong:text-[20px]",
      },
    },
    content: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const content = editor?.getHTML();

    const res = await fetch("/api/blog", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content, slug, metaDesc, metaKeywords }),
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
    formData.append("upload_preset", "cottage_api");
    formData.append("folder", "blog_images");
    setUploading(true);

    try {
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/di3wwp9s0/image/upload",
        { method: "POST", body: formData }
      );
      const data = await response.json();
      if (data.secure_url) {
        editor
          ?.chain()
          .focus()
          .insertContent(
            `<resizable-image src='${data.secure_url}'></resizable-image>`
          )
          .run();
      }
    } catch (err) {
      console.error("Upload error:", err);
    } finally {
      setUploading(false);
    }
  };

  const handleHeading = (level) => {
    const { state } = editor;
    const { from, to } = state.selection;
    const sameBlock = state.doc.resolve(from).blockRange(state.doc.resolve(to));
    if (sameBlock) {
      editor.chain().focus().toggleHeading({ level }).run();
    } else {
      alert(`Please select text on a single line to apply H${level}.`);
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

        <div className="border rounded p-4 w-full relative min-h-[600px] overflow-visible">
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
              onClick={() => handleHeading(1)}
              className="px-2 py-1 border rounded text-xl"
            >
              H1
            </button>
            <button
              type="button"
              onClick={() => handleHeading(2)}
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
              onClick={() => editor?.chain().focus().unsetLink().run()}
              className="px-2 py-1 border rounded text-xl"
            >
              ❌ Unlink
            </button>
            <select
              onChange={(e) =>
                editor?.chain().focus().setFontSize(e.target.value).run()
              }
              className="px-2 py-1 border rounded text-sm"
            >
              <option value="">Font Size</option>
              <option value="14px">Small</option>
              <option value="18px">Medium</option>
              <option value="24px">Large</option>
              <option value="32px">XL</option>
            </select>
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
          {uploading && (
            <p className="text-sm text-gray-500 mb-2">Uploading image...</p>
          )}
          <div className="relative min-h-[600px] overflow-visible">
            <EditorContent editor={editor} />
          </div>
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
