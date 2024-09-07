type Color = {
  name: string;
  image: string;
  modalImage: string;
}

const colors: Color[] = [
  {
    name: 'Natural',
    image: '/img/colores/micropiso/tarquini-natural.jpg',
    modalImage: '/img/colores/micropiso/natural.jpg'
  },
  {
    name: 'Gris Cemento',
    image: '/img/colores/micropiso/tarquini-griscemento.jpg',
    modalImage: '/img/colores/micropiso/griscemento.jpg'
  },

];

const ColorPalette = ({ onSelectColor }: any) => {
  return (
    <div className="colorPalette">
      {colors.map((color, index) => (
        <img
          key={index}
          src={color.image}
          className="colorSelect img-circle"
          alt={color.name}
          onClick={() => onSelectColor(color)}
        />
      ))}
    </div>
  );
};

export default ColorPalette;
