
export default {
    backgroundColor: '#000',
    globe: {
        baseTexture: './static/dt.jpg',
        heightTexture: './static/dt.jpg',
        displacementScale: 0.04,
        shading: 'realistic',
        environment: './static/xk.jpg',
        realisticMaterial: {
            roughness: 0.9
        },
        postEffect: {
            enable: true
        },
        light: {
            main: {
                intensity: 5,
                shadow: true
            },
            ambientCubemap: {
                texture: './static/pisa.hdr',
                diffuseIntensity: 0.2
            }
        }
    }
};