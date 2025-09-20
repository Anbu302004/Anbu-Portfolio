export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Contact Me</h1>
      <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
        Feel free to reach out via email or social media. I’d love to connect!
      </p>
      <form className="max-w-lg mx-auto flex flex-col gap-4">
        <input
          type="text"
          placeholder="Your Name"
          className="p-3 border rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-3 border rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
        />
        <textarea
          placeholder="Your Message"
          className="p-3 border rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          rows={5}
        ></textarea>
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-md">
          Send Message
        </button>
      </form>
    </div>
  );
}
