'use client'

import styled, { css } from 'styled-components';
import { colors } from '../colors'; // Import objek warna dari file colors.ts

// Definisikan tipe untuk prop variant
type Variant = 'default' | 'outlined' | 'soft' | 'ghost';

// Definisikan tipe untuk prop pada komponen tombol
interface ButtonProps {
  variant: Variant;
  color?: keyof typeof colors; // Gunakan keyof typeof untuk memastikan bahwa color hanya bisa memiliki nilai yang ada di objek colors
}

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
      background-color: ${colors[props.color || 'primary'].default};
      color: white;

      &:hover {
        background-color: ${colors[props.color || 'primary'].default};
      }
    `}

  ${(props) =>
    props.variant === 'outlined' &&
    css`
      background-color: transparent;
      border: 1px solid ${colors[props.color || 'primary'].default};
      color: ${colors[props.color || 'primary'].default};

      &:hover {
        background-color: ${colors[props.color || 'primary'].default};
        color: white;
      }
    `}

  ${(props) =>
    props.variant === 'soft' &&
    css`
      background-color: ${colors[props.color || 'primary'].soft};
      color: ${colors[props.color || 'primary'].default}; /* Warna teks sama dengan warna background */

      &:hover {
        background-color: ${colors[props.color || 'primary'].hoverSoft}; /* Warna background saat dihover */
      }
    `}

  ${(props) =>
    props.variant === 'ghost' &&
    css`
      background-color: transparent;
      color: ${colors[props.color || 'primary'].default};

      &:hover {
        background-color: ${colors[props.color || 'primary'].soft};
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
