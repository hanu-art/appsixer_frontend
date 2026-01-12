const OfficeCard = ({
    flag,
    title,
    subtitle,
    address,
    email,
    phone,
    skype,
  }) => {
    return (
      <div
        className="bg-white rounded-xl border border-gray-200
                   shadow-sm hover:shadow-lg
                   transition-all duration-300
                   p-7 md:p-8"
      >
        {/* Header */}
        <div className="flex items-center gap-4 mb-7">
          <div
            className="w-16 h-16 bg-gray-100 rounded-lg
                       flex items-center justify-center"
          >
            <span className="text-3xl">{flag}</span>
          </div>
  
          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              {title}
            </h3>
            <p className="text-sm text-gray-500">
              {subtitle}
            </p>
          </div>
        </div>
  
        {/* Details */}
        <div className="space-y-5 text-sm">
          {/* Address */}
          <div className="flex items-start gap-3">
            <LocationIcon />
            <div>
              <p className="text-gray-400 mb-0.5">Address</p>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {address}
              </p>
            </div>
          </div>
  
          {/* Email */}
          {email && (
            <div className="flex items-center gap-3">
              <MailIcon />
              <div>
                <p className="text-gray-400 mb-0.5">Email</p>
                <a
                  href={`mailto:${email}`}
                  className="text-gray-700 hover:text-[#007bff] transition-colors"
                >
                  {email}
                </a>
              </div>
            </div>
          )}
  
          {/* Phone */}
          {phone && (
            <div className="flex items-center gap-3">
              <PhoneIcon />
              <div>
                <p className="text-gray-400 mb-0.5">Phone</p>
                <a
                  href={`tel:${phone}`}
                  className="text-gray-700 hover:text-[#007bff] transition-colors"
                >
                  {phone}
                </a>
              </div>
            </div>
          )}
  
          {/* Skype */}
          {skype && (
            <div className="flex items-center gap-3">
              <CheckIcon />
              <div>
                <p className="text-gray-400 mb-0.5">Skype</p>
                <p className="text-gray-700">{skype}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };
  
  export default OfficeCard;
  


  const iconClass = "w-5 h-5 text-gray-400 flex-shrink-0";

const LocationIcon = () => (
  <svg className={iconClass} fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
      clipRule="evenodd"
    />
  </svg>
);

const MailIcon = () => (
  <svg className={iconClass} fill="currentColor" viewBox="0 0 20 20">
    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
  </svg>
);

const PhoneIcon = () => (
  <svg className={iconClass} fill="currentColor" viewBox="0 0 20 20">
    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
  </svg>
);

const CheckIcon = () => (
  <svg className={iconClass} fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M2.166 4.999A11.954 11.955 0 0010 1.944a11.954 11.955 0 0017.834 5c.11.65.166 1.32.166 2.001
      0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708
      a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
      clipRule="evenodd"
    />
  </svg>
);
