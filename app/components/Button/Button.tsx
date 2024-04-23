'use client'

import styled, { css } from 'styled-components';

// Definisikan tipe untuk prop variant
type Variant = 'default' | 'outlined' | 'soft' | 'ghost';

// Definisikan tipe untuk prop pada komponen tombol
interface ButtonProps {
  variant: Variant;
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'dark' | 'info';
}

const getSoftColor = (color: string) => {
  switch (color) {
    case 'primary':
      return 'rgb(224 242 254)'; /* Warna biru */
    case 'secondary':
      return 'rgb(243 244 246)'; /* Warna orange */
    case 'success':
      return 'rgb(220 252 231)'; /* Warna hijau */
    case 'warning':
      return 'rgb(254 243 199)'; /* Warna kuning */
    case 'error':
      return 'rgb(254 226 226)'; /* Warna merah */
    case 'dark':
      return '#333'; /* Warna gelap */
    case 'info':
      return 'rgb(207 250 254)'; /* Warna cyan */
    default:
      return 'rgb(224 242 254)'; /* Warna biru sebagai default */
  }
}

const getHoverSoftColor = (color: string) => {
  switch (color) {
    case 'primary':
      return 'rgb(186 230 253)'; /* Warna biru */
    case 'secondary':
      return 'rgb(229 231 235)'; /* Warna orange */
    case 'success':
      return 'rgb(187 247 208)'; /* Warna hijau */
    case 'warning':
      return 'rgb(253 230 138)'; /* Warna kuning */
    case 'error':
      return 'rgb(254 202 202)'; /* Warna merah */
    case 'dark':
      return '#333'; /* Warna gelap */
    case 'info':
      return 'rgb(165 243 252)'; /* Warna cyan */
    default:
      return 'rgb(186 230 253)'; /* Warna biru sebagai default */
  }
}

// Definisikan fungsi untuk mendapatkan warna berdasarkan prop color
const getColor = (color: string) => {
  switch (color) {
    case 'primary':
      return '#2196f3'; /* Warna biru */
    case 'secondary':
      return 'rgb(107 114 128)'; /* Warna orange */
    case 'success':
      return 'rgb(34 197 94)'; /* Warna hijau */
    case 'warning':
      return 'rgb(245 158 11)'; /* Warna kuning */
    case 'error':
      return 'rgb(239 68 68)'; /* Warna merah */
    case 'dark':
      return '#333'; /* Warna gelap */
    case 'info':
      return 'rgb(6 182 212)'; /* Warna cyan */
    default:
      return '#2196f3'; /* Warna biru sebagai default */
  }
};

// Membuat komponen tombol dengan menggunakan Styled Components
const Button = styled.button<ButtonProps>`
  padding: 10px 20px;
  margin: 0 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  ${(props) =>
    props.variant === 'default' &&
    css`
      background-color: ${getColor(props.color || 'primary')};
      color: white;

      &:hover {
        background-color: ${getColor(props.color || 'primary')};
      }
    `}

  ${(props) =>
    props.variant === 'outlined' &&
    css`
      background-color: transparent;
      border: 1px solid ${getColor(props.color || 'primary')};
      color: ${getColor(props.color || 'primary')};

      &:hover {
        background-color: ${getColor(props.color || 'primary')};
        color: white;
      }
    `}

  ${(props) =>
    props.variant === 'soft' &&
    css`
      background-color: ${getSoftColor(props.color || 'primary')};
      color: ${getColor(props.color || 'primary')}; /* Warna teks sama dengan warna background */

      &:hover {
        background-color: ${getHoverSoftColor(props.color || 'primary')}; /* Warna background saat dihover */
      }
    `}

  ${(props) =>
    props.variant === 'ghost' &&
    css`
      background-color: transparent;
      color: ${getColor(props.color || 'primary')};

      &:hover {
        background-color: ${getSoftColor(props.color || 'primary')};
      }
    `}
`;

const ArtButton = () => {
  return (
    <div>
      {/* Menggunakan komponen tombol yang telah dibuat */}
      <Button variant="default" color="primary">Klik Saya</Button>
      <Button variant="outlined" color="secondary">Klik Saya</Button>
      <Button variant="soft" color="primary">Klik Saya</Button>
      <Button variant="ghost" color="warning">Klik Saya</Button>
    </div>
  );
};

export default ArtButton;
