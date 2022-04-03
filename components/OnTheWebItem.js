export default function OnTheWebItem({ image, title, event, link, linkLabel }) {
  return (
    <div className="rounded-md bg-white shadow">
      <img src={image} alt={title} className="rounded-t-md" />
      <div className="p-4">
        <h3 className="text-xl font-bold text-title mb-2">{title}</h3>
        <div className="flex items-center justify-between">
          <span className="text-muted font-bold">{event}</span>
          <a
            href={link}
            className="inline-flex items-center border-b border-main space-x-2 font-bold"
          >
            <span>{linkLabel}</span>

            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.293 5.29303C12.4805 5.10556 12.7348 5.00024 13 5.00024C13.2652 5.00024 13.5195 5.10556 13.707 5.29303L17.707 9.29303C17.8945 9.48056 17.9998 9.73487 17.9998 10C17.9998 10.2652 17.8945 10.5195 17.707 10.707L13.707 14.707C13.5184 14.8892 13.2658 14.99 13.0036 14.9877C12.7414 14.9854 12.4906 14.8803 12.3052 14.6948C12.1198 14.5094 12.0146 14.2586 12.0123 13.9964C12.01 13.7342 12.1108 13.4816 12.293 13.293L14.586 11H3C2.73478 11 2.48043 10.8947 2.29289 10.7071C2.10536 10.5196 2 10.2652 2 10C2 9.73481 2.10536 9.48046 2.29289 9.29292C2.48043 9.10539 2.73478 9.00003 3 9.00003H14.586L12.293 6.70703C12.1055 6.5195 12.0002 6.26519 12.0002 6.00003C12.0002 5.73487 12.1055 5.48056 12.293 5.29303V5.29303Z"
                fill="#11294F"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
