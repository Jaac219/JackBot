const { NlpManager } = require('node-nlp');
const manager = new NlpManager({ languages: ['es'], forceNER: true });
const { getCompletion, getChatCompletion } = require('../services/openaiService')

// Intenciones de saludo
manager.addDocument('es', 'Hola {product}', 'greetings.hello.general');
manager.addDocument('es', 'Buenos días', 'greetings.hello.general');
manager.addDocument('es', 'Buenas tardes', 'greetings.hello.general');
manager.addDocument('es', 'Buenas noches', 'greetings.hello.general');
manager.addDocument('es', 'Hola, ¿cómo estás?', 'greetings.hello.general');
manager.addDocument('es', 'Hola, ¿qué tal?', 'greetings.hello.general');
manager.addDocument('es', 'Saludos', 'greetings.hello.general');
manager.addDocument('es', 'Hola, soy cliente nuevo', 'greetings.hello.general');
manager.addDocument('es', 'Hola, necesito ayuda', 'greetings.hello.general');
manager.addDocument('es', 'Hola, soy nuevo aquí', 'greetings.hello.general');
manager.addDocument('es', '¡Buen día!', 'greetings.hello.general');
manager.addDocument('es', 'Hey', 'greetings.hello.general');
manager.addDocument('es', 'Hola, ¿puedes ayudarme?', 'greetings.hello.general');
manager.addDocument('es', '¡Hola! Necesito información', 'greetings.hello.general');
manager.addDocument('es', 'Hola, ¿qué me recomiendas?', 'greetings.hello.general');
manager.addDocument('es', 'Hola, ¿cómo funciona esto?', 'greetings.hello.general');
manager.addDocument('es', '¡Hola! ¿Alguien puede atenderme?', 'greetings.hello.general');
manager.addDocument('es', 'Hola, necesito asistencia técnica', 'greetings.hello.general');
manager.addDocument('es', 'Hola, ¿hay alguien ahí?', 'greetings.hello.general');

// Intenciones de consulta de productos
manager.addDocument('es', '¿Tienen disponible cursos {{product}}?', 'query.product');
manager.addDocument('es', '¿Cuáles son las características del producto {{product}}?', 'query.product');
manager.addDocument('es', 'Necesito información sobre el producto XYZ', 'query.product');
manager.addDocument('es', 'Dime más sobre el producto XYZ', 'query.product');
manager.addDocument('es', 'Quiero conocer las especificaciones del producto XYZ', 'query.product');
manager.addDocument('es', '¿Qué puedes decirme sobre el producto XYZ?', 'query.product');
manager.addDocument('es', 'Me gustaría obtener detalles sobre el producto XYZ', 'query.product');
manager.addDocument('es', '¿Dónde puedo encontrar información sobre el producto XYZ?', 'query.product');
manager.addDocument('es', 'Quiero conocer las opiniones de los clientes sobre el producto XYZ', 'query.product');
manager.addDocument('es', '¿Cuál es la disponibilidad del producto modelo XYZ?', 'query.product');
manager.addDocument('es', 'Busco información mas amplia del producto XYZ', 'query.product');
manager.addDocument('es', '¿Puedes decirme las caracteristicas principales del producto XYZ?', 'query.product');

// Intenciones para Recomendación de productos
manager.addDocument('es', '¿Puedes recomendarme algún producto similar al modelo XYZ?', 'recommendation.product');
manager.addDocument('es', 'Necesito una recomendación de producto similar al artículo XYZ', 'recommendation.product');
manager.addDocument('es', '¿Qué producto me recomendarías en lugar del modelo XYZ?', 'recommendation.product');
manager.addDocument('es', 'Dame una sugerencia de producto similar al producto XYZ', 'recommendation.product');
manager.addDocument('es', '¿Cuál es una alternativa al artículo XYZ?', 'recommendation.product');

// Intenciones para Consulta de precios
manager.addDocument('es', 'Necesito saber el precio del producto XYZ', 'query.product');
manager.addDocument('es', '¿Cuánto cuesta el curso XYZ?', 'query.price');
manager.addDocument('es', 'Dime el precio del producto XYZ', 'query.price');
manager.addDocument('es', 'Quiero saber el valor del artículo XYZ', 'query.price');
manager.addDocument('es', '¿Cuál es el costo del producto XYZ?', 'query.price');
manager.addDocument('es', 'Necesito conocer el precio del producto XYZ', 'query.price');
manager.addDocument('es', '¿A cuánto está el curso XYZ?', 'query.price');

// Intenciones para Comparación de productos
manager.addDocument('es', '¿Cuáles son las diferencias entre el producto A y el producto B?', 'comparison.product');
manager.addDocument('es', 'Necesito comparar el producto A con el producto B', 'comparison.product');
manager.addDocument('es', '¿En qué se diferencian el producto A y el producto B?', 'comparison.product');
manager.addDocument('es', 'Dime las características distintivas del producto A y el producto B', 'comparison.product');
manager.addDocument('es', '¿Cuál es mejor, el producto A o el producto B?', 'comparison.product');

// Intenciones Consulta de disponibilidad
manager.addDocument('es', '¿Tienen en existencia el producto XYZ?', 'availability.product');
manager.addDocument('es', 'Dime si el curso XYZ está disponible', 'availability.product');
manager.addDocument('es', '¿Puedo comprar el producto XYZ en este momento?', 'availability.product');
manager.addDocument('es', 'Necesito saber si tienen el artículo XYZ en stock', 'availability.product');
manager.addDocument('es', '¿Está disponible el curso XYZ?', 'availability.product');

// Intenciones Ofertas y promociones
manager.addDocument('es', '¿Tienen algún descuento para el producto XYZ?', 'offers.promotions');
manager.addDocument('es', 'Dime si hay alguna oferta especial para el curso XYZ', 'offers.promotions');
manager.addDocument('es', '¿Puedo obtener algún descuento en el producto XYZ?', 'offers.promotions');
manager.addDocument('es', 'Necesito información sobre las promociones del artículo XYZ', 'offers.promotions');
manager.addDocument('es', '¿Cuáles son las ofertas disponibles para el curso XYZ?', 'offers.promotions');

// Intenciones para Proceso de compra
manager.addDocument('es', 'Me gustaría comprar un producto, ¿cómo puedo hacerlo?', 'purchase.process');
manager.addDocument('es', '¿Cómo puedo realizar una compra?', 'purchase.process');
manager.addDocument('es', 'Quiero adquirir un artículo, ¿qué pasos debo seguir?', 'purchase.process');
manager.addDocument('es', 'Dime cómo puedo comprar un producto', 'purchase.process');
manager.addDocument('es', '¿Cuál es el proceso para realizar una compra?', 'purchase.process');

// Intenciones para Confirmación y seguimiento
manager.addDocument('es', '¿Puedes confirmar mi pedido?', 'confirmation.followup');
manager.addDocument('es', 'Necesito hacer un seguimiento de mi envío', 'confirmation.followup');
manager.addDocument('es', 'Dime el estado de mi pedido', 'confirmation.followup');
manager.addDocument('es', '¿Puedes verificar si mi compra fue procesada?', 'confirmation.followup');
manager.addDocument('es', 'Quiero saber si mi pago fue recibido correctamente', 'confirmation.followup');

// Intenciones de despedida
manager.addDocument('es', 'Adiós', 'greetings.bye');
manager.addDocument('es', 'Adiós por ahora', 'greetings.bye');
manager.addDocument('es', 'Hasta luego', 'greetings.bye');
manager.addDocument('es', 'Nos vemos', 'greetings.bye');
manager.addDocument('es', 'Hasta la próxima', 'greetings.bye');
manager.addDocument('es', 'Que tengas un buen día', 'greetings.bye');


// Entities
manager.addNamedEntityText('product', 'course-marketing', ['es'], ['curso de marketing'] )
manager.addNamedEntityText('product', 'course-finances', ['es'], ['curso de finanzas'] )
manager.addNamedEntityText('product', 'ebook-finances', ['es'], ['ebook finanzas personales', 'libros de finanzas personales'] )
manager.addNamedEntityText('product', 'ebook-cake-shop', ['es'], ['ebook panaderia'] )
manager.addNamedEntityText('product', 'insta-sales', ['es'], ['pack ventas por instagram'] )

// manager.addDocument('es', '¿Cuanto es el resultado de la suma de {{a}} + {{b}}?', 'sum');
// manager.addDocument('es', 'mas {{c}}', 'sum');

// Train also the NLG
manager.addAnswer('es', 'greetings.hello.general', '');
manager.addAnswer('es', 'query.product', 'respuesta ---->');

manager.train();

const process = async (req, res) => {
  try {
    const { message } = req.body;
    // manager.load()
    const process = await manager.process('es', message);
  
    let rs = ''
    if(process.intent == 'greetings.hello.general') {
      rs = await getChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: [
          {role: 'system', content: 'Eres un vendedor de infoproductos y el cliente te esta saludando dale una respuesta con emojis'},
          {role: 'user', content: process.utterance}
        ]
      })
    }
  
    res.send(rs);
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  process
}