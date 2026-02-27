export default function ContactPage() {
    return (
        <div>
            <h1>Contact Us</h1>
            <form className="flex flex-col gap-4 max-w-md mx-auto mt-6  p-6 bg-white rounded shadow ">
                <label className="flex flex-col gap-1">
                    Name:
                    <input className="border border-gray-300 p-2 rounded" type="text" name="name" />
                </label>
                <label className="flex flex-col gap-1">
                    Email:
                    <input className="border border-gray-300 p-2 rounded" type="email" name="email" />
                </label>
                <label className="flex flex-col gap-1">
                    Message:
                    <textarea className="border border-gray-300 p-2 rounded" name="message" />
                </label>
                <button className="bg-yellow-500 text-white p-2 rounded" type="submit">Send</button>
            </form>
        </div>
    );
}