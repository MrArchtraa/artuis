'use client'

import styled from 'styled-components';

// Membuat komponen tombol dengan menggunakan Styled Components
const Button = styled.button`
  padding: 10px 20px;
  background-color: #2196f3; /* Warna biru */
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #f44336; /* Warna merah saat dihover */
  }
`;

const MyComponent = () => {
  return (
    <div>
      {/* Menggunakan komponen tombol yang telah dibuat */}
      <Button>Klik Saya</Button>
    </div>
  );
};

export default MyComponent;
