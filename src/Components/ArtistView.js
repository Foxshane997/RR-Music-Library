<<<<<<< HEAD
// // // These components will be making separate API calls from the app.
// // // component to serve specific data about our artist.
// // import { useState, useEffect } from "react";
// // import { useParams } from "react-router-dom";

// // function ArtistView() {
// //   const { id } = useParams();
// //   const [artistData, setArtistData] = useState([]);

// //   useEffect(() => {
// //     const API_URL = `http://localhost:4000/album/${id}`;
// //     const fetchData = async () => {
// //       const response = await fetch(API_URL);
// //       const resData = await response.json();
// //       setArtistData(resData.results);
// //     };
// //     fetchData();
// //   }, [id]);

// //   const justAlbums = artistData.filter(
// //     (entry) => entry.collectionType === "Album"
// //   );

// //   const renderAlbums = justAlbums.map((album, i) => {
// //     return (
// //       <div>
// //         <link to={`/album/${album.collectionId}`}>
// //           <p>{album.collectionName}</p>
// //         </link>
// //       </div>
// //     );
// //   });

// //   return (
// //     <div>
// //       <h2>The id passed was: {id}</h2>
// //       <p>Artist Data Goes Here!</p>
// //       {renderAlbums}
// //     </div>
// //   );
// // }

// // export default ArtistView;

// import { useState, useEffect } from "react";
// import { useParams, Link } from "react-router-dom";

// function ArtistView() {
//   const { id } = useParams();
//   const [artistData, setArtistData] = useState([]);

//   useEffect(() => {
//     const API_URL = `http://localhost:4000/album/${id}`;
//     const fetchData = async () => {
//       const response = await fetch(API_URL);
//       const resData = await response.json();
//       setArtistData(resData.results);
//     };
//     fetchData();
//   }, [id]);

//   const justAlbums = artistData.filter(
//     (entry) => entry.collectionType === "Album"
//   );

//   const renderAlbums = justAlbums.map((album, i) => {
//     return (
//       <div key={album.collectionId}>
//         <Link to={`/album/${album.collectionId}`}>
//           <p>{album.collectionName}</p>
//         </Link>
//       </div>
//     );
//   });

//   return (
//     <div>
//       <h2>The id passed was: {id}</h2>
//       <p>Artist Data Goes Here!</p>
//       {renderAlbums}
//     </div>
//   );
// }

// export default ArtistView;

function ArtistView() {
  return (
      <div>
          <h1>Artist Data goes here</h1>
      </div>
  )
}
// Made a stub view as per Jonathan Hinchley's instruction
export default ArtistView
=======
// These components will be making separate API calls from the app
// component to serve specific data about our artist
import { useState, useEffect } from 'react'

function ArtistView() {
    const [ artistData, setArtistData ] = useState([])

    return (
        <div>
            <p>Artist Data Goes Here!</p>
        </div>
    )
}

export default ArtistView
>>>>>>> withContext
