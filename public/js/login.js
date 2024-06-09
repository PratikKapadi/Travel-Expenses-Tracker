// const loginForm = document.getElementById('loginForm');

// loginForm.addEventListener('submit', async function (e) {
//     e.preventDefault();

//     const username = document.getElementById('username').value;
//     const password = document.getElementById('password').value;

//     try {
//         const response = await fetch('/login', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({ username, password })
//         });

//         const data = await response.json();
//         if (data.success) {
//             window.location.href = '/dashboard.html';
//         } else {
//             alert('Invalid username or password');
//         }
//     } catch (error) {
//         console.error('Error:', error);
//     }
// });
