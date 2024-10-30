import React from 'react';
import logo from './logo.svg';
import './App.css';
import Gallery from './Component/Gallery';

const images = [
  {
    src: 'https://fastly.picsum.photos/id/143/200/200.jpg?hmac=zGj8dhmmqaaQZDcHhU9C0itdL12zcGTpuVdQiVrYiEQ',
    alt: 'Image 1',
    title: 'Image 1',
    description: 'Description for Image 1',
  },
  {
    src: 'https://fastly.picsum.photos/id/143/200/200.jpg?hmac=zGj8dhmmqaaQZDcHhU9C0itdL12zcGTpuVdQiVrYiEQ',
    alt: 'Image 2',
    title: 'Image 2',
    description: 'Description for Image 2',
  },
  {
    src: 'https://fastly.picsum.photos/id/143/200/200.jpg?hmac=zGj8dhmmqaaQZDcHhU9C0itdL12zcGTpuVdQiVrYiEQ',
    alt: 'Image 3',
    title: 'Image 3',
    description: 'Description for Image 3',
  },
  {
    src: 'https://fastly.picsum.photos/id/143/200/200.jpg?hmac=zGj8dhmmqaaQZDcHhU9C0itdL12zcGTpuVdQiVrYiEQ',
    alt: 'Image 4',
    title: 'Image 4',
    description: 'Description for Image 4',
  },
  {
    src: 'https://fastly.picsum.photos/id/143/200/200.jpg?hmac=zGj8dhmmqaaQZDcHhU9C0itdL12zcGTpuVdQiVrYiEQ',
    alt: 'Image 5',
    title: 'Image 5',
    description: 'Description for Image 5',
  },
  {
    src: 'https://fastly.picsum.photos/id/143/200/200.jpg?hmac=zGj8dhmmqaaQZDcHhU9C0itdL12zcGTpuVdQiVrYiEQ',
    alt: 'Image 6',
    title: 'Image 6',
    description: 'Description for Image 6',
  },
  {
    src: 'https://fastly.picsum.photos/id/143/200/200.jpg?hmac=zGj8dhmmqaaQZDcHhU9C0itdL12zcGTpuVdQiVrYiEQ',
    alt: 'Image 1',
    title: 'Image 1',
    description: 'Description for Image 1',
  },
  {
    src: 'https://fastly.picsum.photos/id/143/200/200.jpg?hmac=zGj8dhmmqaaQZDcHhU9C0itdL12zcGTpuVdQiVrYiEQ',
    alt: 'Image 2',
    title: 'Image 2',
    description: 'Description for Image 2',
  },
  {
    src: 'https://fastly.picsum.photos/id/143/200/200.jpg?hmac=zGj8dhmmqaaQZDcHhU9C0itdL12zcGTpuVdQiVrYiEQ',
    alt: 'Image 3',
    title: 'Image 3',
    description: 'Description for Image 3',
  },
  {
    src: 'https://fastly.picsum.photos/id/143/200/200.jpg?hmac=zGj8dhmmqaaQZDcHhU9C0itdL12zcGTpuVdQiVrYiEQ',
    alt: 'Image 4',
    title: 'Image 4',
    description: 'Description for Image 4',
  },
  {
    src: 'https://fastly.picsum.photos/id/143/200/200.jpg?hmac=zGj8dhmmqaaQZDcHhU9C0itdL12zcGTpuVdQiVrYiEQ',
    alt: 'Image 5',
    title: 'Image 5',
    description: 'Description for Image 5',
  },
  {
    src: 'https://fastly.picsum.photos/id/143/200/200.jpg?hmac=zGj8dhmmqaaQZDcHhU9C0itdL12zcGTpuVdQiVrYiEQ',
    alt: 'Image 6',
    title: 'Image 6',
    description: 'Description for Image 6',
  },
];

const imagesList = images.map((image, index) => (
  {image: image}
));

function App() {
  return (
        <Gallery images={imagesList} />
  );
}

export default App;
