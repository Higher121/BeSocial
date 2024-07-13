// import React, { useState } from 'react';

// function PostForm({ onAddPost }) {
//   const [title, setTitle] = useState('');
//   const [content, setContent] = useState('');
//   const [image, setImage] = useState(null);

//   const handleImageChange = (e) => {
//     if (e.target.files && e.target.files[0]) {
//       setImage(URL.createObjectURL(e.target.files[0]));
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onAddPost({ title, content, image });
//     setTitle('');
//     setContent('');
//     setImage(null);
//   };

//   return (
//     <form onSubmit={handleSubmit} className="mb-4">
//       <div className="mb-3">
//         <label htmlFor="title" className="form-label">Title</label>
//         <input
//           type="text"
//           className="form-control"
//           id="title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           required
//         />
//       </div>
//       <div className="mb-3">
//         <label htmlFor="content" className="form-label">Content</label>
//         <textarea
//           className="form-control"
//           id="content"
//           rows="3"
//           value={content}
//           onChange={(e) => setContent(e.target.value)}
//           required
//         />
//       </div>
//       <div className="mb-3">
//         <label htmlFor="image" className="form-label">Image</label>
//         <input
//           type="file"
//           className="form-control"
//           id="image"
//           onChange={handleImageChange}
//           accept="image/*"
//         />
//       </div>
//       <button type="submit" className="btn btn-primary">Post</button>
//     </form>
//   );
// }

// export default PostForm;
