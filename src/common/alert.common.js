class AlertCommon {
  // Hàm info
  info(message = "A simple info alert with an example link. Give it a click if you like.") {
    return `
      <div style="position: fixed; z-index: 100; bottom: 0; right: 0">
        <div class="flex items-center p-4 mb-4 text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400"
            id="alert-1" role="alert">
          <svg class="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"></path>
          </svg>
          <span class="sr-only">Info</span>
          <div class="ms-3 text-sm font-medium">
            ${message}
          </div>
          <button class="ms-auto bg-blue-50 text-blue-500 rounded-lg inline-flex items-center justify-center h-8 w-8 -mx-1.5 -my-1.5 focus:ring-2 focus:ring-blue-400 p-1.5 hover:bg-blue-200 dark:bg-gray-800 dark:text-blue-400 dark:hover:bg-gray-700"
                  type="button" data-dismiss-target="#alert-1" aria-label="Close" hidden="hidden">
            <span class="sr-only">Close</span>
            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"></path>
            </svg>
          </button>
        </div>
      </div>
    `;
  }

  // Hàm danger
  danger(message = "A simple danger alert. Something went wrong!") {
    return `
      <div style="position: fixed; z-index: 100; bottom: 0; right: 0">
        <div class="flex items-center p-4 mb-4 text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
            id="alert-2" role="alert">
          <svg class="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"></path>
          </svg>
          <span class="sr-only">Danger</span>
          <div class="ms-3 text-sm font-medium">
            ${message}
          </div>
          <button class="ms-auto bg-red-50 text-red-500 rounded-lg inline-flex items-center justify-center h-8 w-8 -mx-1.5 -my-1.5 focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 dark:bg-gray-800 dark:text-red-400 dark:hover:bg-gray-700"
                  type="button" data-dismiss-target="#alert-2" aria-label="Close" hidden="hidden">
            <span class="sr-only">Close</span>
            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"></path>
            </svg>
          </button>
        </div>
      </div>
    `;
  }

  // Hàm success
  success(message = "A simple success alert. Everything went fine!") {
    return `
      <div style="position: fixed; z-index: 100; bottom: 0; right: 0">
        <div class="flex items-center p-4 mb-4 text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
            id="alert-3" role="alert">
          <svg class="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"></path>
          </svg>
          <span class="sr-only">Success</span>
          <div class="ms-3 text-sm font-medium">
            ${message}
          </div>
          <button class="ms-auto bg-green-50 text-green-500 rounded-lg inline-flex items-center justify-center h-8 w-8 -mx-1.5 -my-1.5 focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 dark:bg-gray-800 dark:text-green-400 dark:hover:bg-gray-700"
                  type="button" data-dismiss-target="#alert-3" aria-label="Close" hidden="hidden">
            <span class="sr-only">Close</span>
            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"></path>
            </svg>
          </button>
        </div>
      </div>
    `;
  }


  // Admin check
  admin(message = "You can't access this route!") {
    return `
      <div style="position: fixed; z-index: 100; bottom: 0; right: 0">
        <div class="flex items-center p-4 mb-4 text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
            id="alert-3" role="alert">
          <svg class="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"></path>
          </svg>
          <span class="sr-only">Success</span>
          <div class="ms-3 text-sm font-medium">
            ${message}
          </div>
          <button class="ms-auto bg-green-50 text-green-500 rounded-lg inline-flex items-center justify-center h-8 w-8 -mx-1.5 -my-1.5 focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 dark:bg-gray-800 dark:text-green-400 dark:hover:bg-gray-700"
                  type="button" data-dismiss-target="#alert-3" aria-label="Close" hidden="hidden">
            <span class="sr-only">Close</span>
            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"></path>
            </svg>
          </button>
        </div>
      </div>
      <script>
        // Hàm điều hướng
        function navigateTo(route) {
          window.location.href = route;
        }

        // Điều hướng sau 3.5 giây
        setTimeout(function() {
          navigateTo('/'); // Thay '/new-route' bằng đường dẫn bạn muốn điều hướng
        }, 3500); // 3500 ms = 3.5 giây
      </script>
    `;
  }
}

module.exports = new AlertCommon();