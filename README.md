<h2>MVP</h2>
<ul>
  <li>Create a single-page application that allows users to search for books.</li>
<li>Displays results in a responsive grid, showing the book's image. On hover, the title, author, and descriptions is visible.</li>
 <li>On clicking the book image, a modal with more detailed information is displayed.</li>
</ul>
<h2>Purpose</h2>
<ul>
  <li>The purpose of the project is to create a user-friendly search engine that uses the Google Books API, that provides users with a seamless way to explore and access book data, and get to know more about their favourite book titles.</li>
</ul>
<h2>Tech Stack </h2>
<ul>
  <li><b>Front-end:</b>
   React, SCSS
  </li>
  <li><b>Why? </b>
  It offers modularity and efficiency in building user-interfaces, which SCSS enhances the styling process with variables and mixins.</li>
  <li><b>API: Google Books API</b>
    <br>
  It provides a comprehensive database for book-related metadata, which suits this project.
  </li>
</ul>
<h2>Build Steps</h2>
<ul>
  <li>1.Clone the repository <br>
  git clone https://github.com/poojaanumula/GOOGLE_API_PROJECT.git
  </li>
  <li>
    2.Install dependencies
  </li>
  <li>
    3.Run the development server.<br>
    npm run build

  </li>
</ul>
<h2>Design Goals/Approach</h2>
<b>Design Goals</b>
<li>A clean, responsive, and intuitive UI.
Provides detailed information about a chosen book in a modal.
Offer feedback to the user when no results are found.</li>
<h2>Features
</h2>
<li>Aesthetic header with the page title and subtitle.</li>
<li>Search bar for users to search with a query string.</li>
<li>Tiles laid out in a responsive grid format.
On hover, the title, description, and author will be revealed.
On clicking the tile, a modal will open showing more detailed information.</li>
<li>Handle edge cases and errors (e.g., no results or invalid queries).</li>
<li>User-friendly design with feedback for different states.</li>
<li>Fully responsive layout.</li>
<h2>Future Goals</h2>
<li>Allow users to save books that they like or want to read.</li>
