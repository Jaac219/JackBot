const { NlpManager } = require('node-nlp');
const { getChatCompletion } = require('../services/openaiService');

const path = require('path');
const fs = require('fs');

const manager = new NlpManager({ languages: ['es'], forceNER: true });

const rutaArchivoJson = path.join(__dirname, '..', 'data', 'infoProducts.json');
const products = JSON.parse(fs.readFileSync(rutaArchivoJson, 'utf8'));

// Intenciones para Confirmación y seguimiento
// manager.addDocument('es', '¿Puedes confirmar mi pedido?', 'confirmation.followup');
// manager.addDocument('es', 'Necesito hacer un seguimiento de mi envío', 'confirmation.followup');
// manager.addDocument('es', 'Dime el estado de mi pedido', 'confirmation.followup');
// manager.addDocument('es', '¿Puedes verificar si mi compra fue procesada?', 'confirmation.followup');
// manager.addDocument('es', 'Quiero saber si mi pago fue recibido correctamente', 'confirmation.followup');

// Intenciones para Comparación de productos
// manager.addDocument('es', '¿Cuáles son las diferencias entre el producto A y el producto B?', 'comparison.product');
// manager.addDocument('es', 'Necesito comparar el producto A con el producto B', 'comparison.product');
// manager.addDocument('es', '¿En qué se diferencian el producto A y el producto B?', 'comparison.product');
// manager.addDocument('es', 'Dime las características distintivas del producto A y el producto B', 'comparison.product');
// manager.addDocument('es', '¿Cuál es mejor, el producto A o el producto B?', 'comparison.product');

// Intenciones Consulta de disponibilidad
// manager.addDocument('es', '¿Tienen en existencia el producto XYZ?', 'availability.product');
// manager.addDocument('es', 'Dime si el curso XYZ está disponible', 'availability.product');
// manager.addDocument('es', '¿Puedo comprar el producto XYZ en este momento?', 'availability.product');
// manager.addDocument('es', 'Necesito saber si tienen el artículo XYZ en stock', 'availability.product');
// manager.addDocument('es', '¿Está disponible el curso XYZ?', 'availability.product');

// Intenciones de saludo
manager.addDocument('es', 'Hola', 'greeting');
manager.addDocument('es', 'Buenos días', 'greeting');
manager.addDocument('es', 'Buenas tardes', 'greeting');
manager.addDocument('es', 'Buenas noches', 'greeting');
manager.addDocument('es', 'Hola, ¿cómo estás?', 'greeting');
manager.addDocument('es', 'Hola, ¿qué tal?', 'greeting');
manager.addDocument('es', 'Saludos', 'greeting');
manager.addDocument('es', 'Hola, soy cliente nuevo', 'greeting');
manager.addDocument('es', 'Hola, necesito ayuda', 'greeting');
manager.addDocument('es', 'Hola, soy nuevo aquí', 'greeting');
manager.addDocument('es', '¡Buen día!', 'greeting');
manager.addDocument('es', 'Hey', 'greeting');
manager.addDocument('es', 'Hola, ¿puedes ayudarme?', 'greeting');
manager.addDocument('es', '¡Hola! Necesito información', 'greeting');
manager.addDocument('es', 'Hola, ¿qué me recomiendas?', 'greeting');
manager.addDocument('es', 'Hola, ¿cómo funciona esto?', 'greeting');
manager.addDocument('es', '¡Hola! ¿Alguien puede atenderme?', 'greeting');
manager.addDocument('es', 'Hola, necesito asistencia técnica', 'greeting');
manager.addDocument('es', 'Hola, ¿hay alguien ahí?', 'greeting');
manager.addDocument('es', 'Hola, necesito asistencia', 'greeting');
manager.addDocument('es', 'Hola, requiero ayuda', 'greeting');
manager.addDocument('es', 'Hola, busco información', 'greeting');
manager.addDocument('es', 'Hola, ¿puedes responder algunas preguntas?', 'greeting');
manager.addDocument('es', 'Hola, tengo algunas dudas', 'greeting');
manager.addDocument('es', 'Hola, ¿hay alguien disponible para atenderme?', 'greeting');
manager.addDocument('es', 'Hola, ¿puedes brindarme asesoría?', 'greeting');
manager.addDocument('es', 'Hola, necesito resolver un problema', 'greeting');
manager.addDocument('es', 'Hola, ¿me puedes orientar?', 'greeting');
manager.addDocument('es', 'Hola, estoy buscando ayuda técnica', 'greeting');
manager.addDocument('es', 'Hola, ¿me puedes asistir?', 'greeting');
manager.addDocument('es', 'Hola, ¿hay alguien que pueda atender mi consulta?', 'greeting');
manager.addDocument('es', 'Hola, necesito hablar con un representante', 'greeting');
manager.addDocument('es', 'Hola, ¿puedes darme más información?', 'greeting');
manager.addDocument('es', 'Hola, ¿me puedes guiar?', 'greeting');
manager.addDocument('es', 'Hola, necesito realizar una solicitud', 'greeting');
manager.addDocument('es', 'Hola, ¿puedes resolver mi inquietud?', 'greeting');
manager.addDocument('es', 'Hola, necesito hacer una pregunta', 'greeting');
manager.addDocument('es', 'Hola, ¿me puedes explicar cómo funciona?', 'greeting');
manager.addDocument('es', 'Buen día', 'greeting');
manager.addDocument('es', '¿Cómo estás?', 'greeting');
manager.addDocument('es', 'Qué gusto verte', 'greeting');
manager.addDocument('es', 'Un placer saludarte', 'greeting');
manager.addDocument('es', '¡Feliz día!', 'greeting');
manager.addDocument('es', '¿Qué tal?', 'greeting');
manager.addDocument('es', 'Hola, buenos días', 'greeting');
manager.addDocument('es', 'Espero que estés bien', 'greeting');
manager.addDocument('es', 'Saludos cordiales', 'greeting');
manager.addDocument('es', '¡Buenas!', 'greeting');
manager.addDocument('es', '¡Hola de nuevo!', 'greeting');
manager.addDocument('es', '¿Cómo te va?', 'greeting');
manager.addDocument('es', 'Es un placer estar aquí', 'greeting');
manager.addDocument('es', 'Que tengas un excelente día', 'greeting');
manager.addDocument('es', 'Espero que hayas tenido un buen fin de semana', 'greeting');
manager.addDocument('es', 'Deseándote un buen comienzo de semana', 'greeting');
manager.addDocument('es', '¡Hola! ¿Cómo puedo ayudarte hoy?', 'greeting');
manager.addDocument('es', '¡Hola! ¿Qué te trae por aquí?', 'greeting');
manager.addDocument('es', '¿En qué puedo servirte hoy?', 'greeting');
manager.addDocument('es', 'Buenas tardes', 'greeting');
manager.addDocument('es', 'Buenas noches', 'greeting');
manager.addDocument('es', 'Buenos dias', 'greeting');
manager.addDocument('es', 'Que tal', 'greeting');

// Intenciones de consulta de productos
manager.addDocument('es', '%product%', 'query.product');
manager.addDocument('es', '¿Tienen disponible cursos de {product}?', 'query.product');
manager.addDocument('es', '¿Cuáles son las características del producto %product%?', 'query.product');
manager.addDocument('es', 'Necesito información sobre el producto %product%', 'query.product');
manager.addDocument('es', 'Dime más sobre el producto %product%', 'query.product');
manager.addDocument('es', 'Quiero conocer las especificaciones del producto %product%', 'query.product');
manager.addDocument('es', '¿Qué puedes decirme sobre el producto %product%?', 'query.product');
manager.addDocument('es', 'Me gustaría obtener detalles sobre el producto %product%', 'query.product');
manager.addDocument('es', '¿Dónde puedo encontrar información sobre el producto %product%?', 'query.product');
manager.addDocument('es', 'Quiero conocer las opiniones de los clientes sobre el producto %product%', 'query.product');
manager.addDocument('es', '¿Cuál es la disponibilidad del producto modelo %product%?', 'query.product');
manager.addDocument('es', 'Busco información mas amplia del producto %product%', 'query.product');
manager.addDocument('es', '¿Puedes decirme las caracteristicas principales del producto %product%?', 'query.product');


// Intenciones para Recomendación de productos
manager.addDocument('es', '¿Puedes recomendarme algún producto similar al modelo %product%?', 'recommendation.product');
manager.addDocument('es', 'Necesito una recomendación de producto similar al artículo %product%', 'recommendation.product');
manager.addDocument('es', '¿Qué producto me recomendarías en lugar del modelo %product%?', 'recommendation.product');
manager.addDocument('es', 'Dame una sugerencia de producto similar al producto %product%', 'recommendation.product');
manager.addDocument('es', '¿Cuál es una alternativa al artículo %product%?', 'recommendation.product');

// Intenciones para Consulta de precios
manager.addDocument('es', 'Necesito saber el precio del producto %product%', 'query.price');
manager.addDocument('es', '¿Cuánto cuesta el curso %product%?', 'query.price');
manager.addDocument('es', 'Dime el precio del producto %product%', 'query.price');
manager.addDocument('es', 'Quiero saber el valor del artículo %product%', 'query.price');
manager.addDocument('es', '¿Cuál es el costo del producto %product%?', 'query.price');
manager.addDocument('es', 'Necesito conocer el precio del producto %product%', 'query.price');
manager.addDocument('es', '¿A cuánto está el curso %product%?', 'query.price');

// Intenciones Ofertas y promociones
manager.addDocument('es', '¿Tienen algún descuento para el producto %product%?', 'offers.promotions');
manager.addDocument('es', 'Dime si hay alguna oferta especial para el curso %product%', 'offers.promotions');
manager.addDocument('es', '¿Puedo obtener algún descuento en el producto %product%?', 'offers.promotions');
manager.addDocument('es', 'Necesito información sobre las promociones del artículo %product%', 'offers.promotions');
manager.addDocument('es', '¿Cuáles son las ofertas disponibles para el curso %product%?', 'offers.promotions');

// Intenciones para Proceso de compra
manager.addDocument('es', 'Me gustaría comprar un producto %product%, ¿cómo puedo hacerlo?', 'purchase.process');
manager.addDocument('es', '¿Cómo puedo realizar una compra?', 'purchase.process');
manager.addDocument('es', 'Quiero adquirir un artículo %product%, ¿qué pasos debo seguir?', 'purchase.process');
manager.addDocument('es', 'Dime cómo puedo comprar un producto %product%', 'purchase.process');
manager.addDocument('es', '¿Cuál es el proceso para realizar una compra?', 'purchase.process');

// Intenciones de despedida
manager.addDocument('es', 'Adiós', 'farewell');
manager.addDocument('es', 'Adiós por ahora', 'farewell');
manager.addDocument('es', 'Hasta luego', 'farewell');
manager.addDocument('es', 'Nos vemos', 'farewell');
manager.addDocument('es', 'Hasta la próxima', 'farewell');
manager.addDocument('es', 'Que tengas un buen día', 'farewell');
manager.addDocument('es', 'Chao', 'farewell');
manager.addDocument('es', 'Chauu', 'farewell');

// Intenciones de Confirmacion
manager.addDocument('es', 'Si', 'afirmation');
manager.addDocument('es', 'Si, por favor', 'afirmation');
manager.addDocument('es', 'Afirmativo', 'afirmation');
manager.addDocument('es', 'Afirmacion', 'afirmation');
manager.addDocument('es', 'Me parece bien', 'afirmation');
manager.addDocument('es', 'Estoy de acuerdo', 'afirmation');
manager.addDocument('es', 'Por favor', 'afirmation');

// Entities
manager.addNamedEntityText('product', 'ebook-mini-donas', ['es'], ['Ebook de mini donas'] )
manager.addNamedEntityText('product', 'ebook-amigurumis-crochet', ['es'], ['Ebook de amigurumis crochet'] )
manager.addNamedEntityText('product', 'curso-excel', ['es'], ['Curso de excel'] )
manager.addNamedEntityText('product', 'curso-avisos-3d', ['es'], ['Curso avisos 3D'] )
manager.addNamedEntityText('product', 'curso-recetas-pizza', ['es'], ['Curso recetas de pizza'] )
manager.addNamedEntityText('product', 'curso-reposteria', ['es'], ['Curso de reposteria'] )
manager.addNamedEntityText('product', 'curso-artesania', ['es'], ['Curso de artesania'] )
manager.addNamedEntityText('product', 'ebook-recetas-reposteria', ['es'], ['Ebook recetas de reposteria'] )
manager.addNamedEntityText('product', 'curso-mochilas-wayuu', ['es'], ['Curso de creación mochilas wayuu'] )
manager.addNamedEntityText('product', 'curso-reposteria-avanzado', ['es'], ['Curso de reposteria avanzado'] )
manager.addNamedEntityText('product', 'pack-estimulacion-lenguaje', ['es'], ['Pack estimulación del lenguaje'] )
manager.addNamedEntityText('product', 'curso-ventas-redes', ['es'], ['Curso de ventas por facebook', 'Curso de ventas por instagram', 'Curso de ventas por redes'] )
manager.addNamedEntityText('product', 'curso-maquillaje-profesional', ['es'], ['Curso de maquillaje profesional'] )

const initPrompGpt = { role: 'system', content: `Quiero que actues como vendedor de productos digitales enfocados en como ganar dinero extra o mejorar las finanzas personales. Presentate como jaackBot. Tu mision va a ser lograr hacer conversiones (ventas) con respuestas cortas. Nunca salgas de tu personaje. Agrega emojis a las respuestas.` }
const context = {}

// Train also the NLG
manager.addAnswer('es', 'greeting', async ({utterance, from})=>{
  const messages = [initPrompGpt,{ role: 'system', content: 'Saluda al cliente y preguntale en que producto esta interesado.' }]
  return await getChatCompletion({ messages })
})
manager.addAnswer('es', 'farewell', async ({utterance})=>{
  const messages = [initPrompGpt,{ role: 'system', content: 'El cliente se esta despidiendo, dale una despedida amable' }, { role: 'user', content: utterance }]
  return await getChatCompletion({ messages })
});

manager.addAnswer('es', 'query.product', async ({utterance, entities, from})=>{
  const messages = [initPrompGpt]
  context.intent = 'query.product'

  if(entities.length > 0) {
    const product = products.find((val)=>val.key == entities[0]?.option)
    context.entities = entities

    messages.push({role: 'system', content: `El cliente esta pidiendo informacion del producto ${product} convencelo de que este producto es la mejor opcion de compra. Envía el siguiente enlace tal como lo he proporcionado y sin cambiarlo por ningún otro texto: ${product.sales_page}`})
  } else {
    let pr = products.map((val)=>`${val.id}. ${val.name}`)
    pr = pr.join('\n')
    messages.push({role: 'system', content: `El cliente está solicitando un producto que no existe. Envía la siguiente lista de productos tal cual te lo estoy enviando ${pr}`})
  }


  messages.push({role: 'user', content: utterance})
  return await getChatCompletion({ messages })
});

manager.addAnswer('es', 'afirmation', async ({})=>{
  const {intent, entities} = context

  if(intent == 'query.product'){
    if(entities && entities.length > 0){
      const product = products.find((val)=>val.key == entities[0].option)
      return `💸 Todo lo que necesitas saber sobre este producto lo podras encontrar en el siguiente enlace: ${product.sales_page}, 🚀 no te arrepentiras`
    }else{
      let pr = products.map((val)=>`${val.id}. ${val.name}: ${val.product_page}`)
      return pr.join('\n')
    }
  }
})

manager.train()

const process = async (req, res) => {
  try {
    const { message, extraData } = req.body;
    const { from } = extraData;

    const process = await manager.process('es', message);
    const { utterance, entities } = process;

    console.log('\n', process, '\n');

    const rs = typeof process.answer == 'function' ?
      await process.answer({ utterance, entities, from }) : 
      process.answer ?? 
      '🙈 Lo siento pero no puedo entender tu pregunta podrias replantearla'

    res.send(rs);
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  process
}