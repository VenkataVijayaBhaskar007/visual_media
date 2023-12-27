import React from 'react';

const Cards: React.FC = () => {
  const handleToggle = () => {
    const annualElements = document.querySelectorAll('.annual');
    const monthElements = document.querySelectorAll('.month');

    for (let i = 0; i < annualElements.length; i++) {
      if ((document.getElementById('toggle') as HTMLInputElement).checked) {
        annualElements[i].classList.add('hidden');
        monthElements[i].classList.remove('hidden');
      } else {
        annualElements[i].classList.remove('hidden');
        monthElements[i].classList.add('hidden');
      }
    }
  };

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@500;700&display=swap"
          rel="stylesheet"
        />
        <style>
          {`
            @media (min-width: 640px) {
              .sm\\:bg-svg-bottom {
                background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='353' height='304'%3E%3Cg fill='none' fill-rule='evenodd' stroke='%23D0D5F6' stroke-width='2'%3E%3Cpath d='M180.29 759c102.087-21.62 155.232-61.312 159.437-119.074 6.307-86.643-231.598-17.186-136.358-198 95.241-180.813 181.318-185.29 136.358-298C294.767 31.216 174.04-27.954 33.79 16.8c-93.501 29.836-144.652 140.545-153.453 332.126'/%3E%3Cpath d='M138.3 759c80.083-18.988 121.774-53.846 125.072-104.575 4.948-76.093-181.679-15.094-106.966-173.89C231.118 321.738 298.64 317.808 263.372 218.82c-35.269-98.986-129.974-150.95-239.995-111.646C-49.97 133.378-90.096 230.605-97 398.859'/%3E%3Cpath d='M102.065 761c60.604-16.56 92.153-46.963 94.65-91.208 3.743-66.367-137.488-13.165-80.949-151.664 56.54-138.5 107.638-141.927 80.948-228.261-26.69-86.335-98.359-131.656-181.618-97.376C-40.41 215.345-70.775 300.145-76 446.892'/%3E%3C/g%3E%3C/svg%3E");
              }
            }

            .toggle_dot {
              top: -.25rem;
              transition: all 0.3s ease-in-out;
            }

            input:checked~.toggle_dot {
              transform: translateX(100%);
              background-color: #0082c8;
            }

            .bg-gradient {
              background: #667db6;
              /* fallback for old browsers */
              background: -webkit-linear-gradient(to right, #667db6, #0082c8, #0082c8, #667db6);
              /* Chrome 10-25, Safari 5.1-6 */
              background: linear-gradient(to right, #667db6, #0082c8, #0082c8, #667db6);
              /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
            }

            .bg-gradient-base {
              background-color: #0082c8;
            }

            .font-work-sans {
              font-family: 'Work Sans', sans-serif;
            }
          `}
        </style>
      </head>

      <body className="text-gray-900 font-work-sans h-screen bg-no-repeat bg-left-bottom sm:bg-svg-bottom">
        {/* ... Rest of your JSX content ... */}
      </body>
    </html>
  );
};

export default Cards;
