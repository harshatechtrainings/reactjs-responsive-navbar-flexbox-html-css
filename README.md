# Responsive Navbar with ReactJS, HTML, and CSS

This project demonstrates the implementation of a responsive navigation bar using ReactJS, HTML, and CSS. The design is responsive and adaptable to various screen sizes, making it suitable for all types of devices.

## Features

- **Responsive Design:** The navigation bar is designed to be responsive and work seamlessly on different screen sizes, from desktops to mobile devices.

- **Flexbox Layout:** Flexbox is utilized to create a flexible and dynamic layout, ensuring the navbar adjusts its structure based on the available space.

- **Menu Options on Right:** By default, the menu options are positioned on the right side of the navbar for a clean and modern look.

## Usage

1. Clone the repository:

   ```bash
   git clone https:githubcomharshatechtrainings/reactjs-responsive-navbar-flexbox-html-css.git
   ```

2. Initiate the project

   ```bash
   git intall
   ```

3. Navigate to the project directory

   ```bash
   cd reactjs-responsive-navbar-flexbox-html-css
   ```

4. Run the React development server

   ```bash
   npm start
   ```

## Menu on Left

1. Replacement below code in `reactjs-responsive-navbar-flexbox-html-css\src\common\nav.jsx` in div: nav-logo.

```bash
        <a className="nav-bars" href="#navbar" aria-label="Open main menu">
            <i><CgMenuGridO /></i>
        </a>
        <a className='logo-image'>
            <img src={brandlogo} />
        </a>
```

2. Apply changes in css by replacig the style `right:0` with `left:0` in nav element `reactjs-responsive-navbar-flexbox-html-css\src\assets\css\style.css`
