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
manager.addDocument('es', 'Hola', 'greet');
manager.addDocument('es', 'Buenos días', 'greet');
manager.addDocument('es', 'Buenas tardes', 'greet');
manager.addDocument('es', 'Buenas noches', 'greet');
manager.addDocument('es', 'Hola, ¿cómo estás?', 'greet');
manager.addDocument('es', 'Hola, ¿qué tal?', 'greet');
manager.addDocument('es', 'Saludos', 'greet');
manager.addDocument('es', 'Hola, soy cliente nuevo', 'greet');
manager.addDocument('es', 'Hola, necesito ayuda', 'greet');
manager.addDocument('es', 'Hola, soy nuevo aquí', 'greet');
manager.addDocument('es', '¡Buen día!', 'greet');
manager.addDocument('es', 'Hey', 'greet');
manager.addDocument('es', 'Hola, ¿puedes ayudarme?', 'greet');
manager.addDocument('es', '¡Hola! Necesito información', 'greet');
manager.addDocument('es', 'Hola, ¿qué me recomiendas?', 'greet');
manager.addDocument('es', 'Hola, ¿cómo funciona esto?', 'greet');
manager.addDocument('es', '¡Hola! ¿Alguien puede atenderme?', 'greet');
manager.addDocument('es', 'Hola, necesito asistencia técnica', 'greet');
manager.addDocument('es', 'Hola, ¿hay alguien ahí?', 'greet');
manager.addDocument('es', 'Hola, necesito asistencia', 'greet');
manager.addDocument('es', 'Hola, requiero ayuda', 'greet');
manager.addDocument('es', 'Hola, busco información', 'greet');
manager.addDocument('es', 'Hola, ¿puedes responder algunas preguntas?', 'greet');
manager.addDocument('es', 'Hola, tengo algunas dudas', 'greet');
manager.addDocument('es', 'Hola, ¿hay alguien disponible para atenderme?', 'greet');
manager.addDocument('es', 'Hola, ¿puedes brindarme asesoría?', 'greet');
manager.addDocument('es', 'Hola, necesito resolver un problema', 'greet');
manager.addDocument('es', 'Hola, ¿me puedes orientar?', 'greet');
manager.addDocument('es', 'Hola, estoy buscando ayuda técnica', 'greet');
manager.addDocument('es', 'Hola, ¿me puedes asistir?', 'greet');
manager.addDocument('es', 'Hola, ¿hay alguien que pueda atender mi consulta?', 'greet');
manager.addDocument('es', 'Hola, necesito hablar con un representante', 'greet');
manager.addDocument('es', 'Hola, ¿puedes darme más información?', 'greet');
manager.addDocument('es', 'Hola, ¿me puedes guiar?', 'greet');
manager.addDocument('es', 'Hola, necesito realizar una solicitud', 'greet');
manager.addDocument('es', 'Hola, ¿puedes resolver mi inquietud?', 'greet');
manager.addDocument('es', 'Hola, necesito hacer una pregunta', 'greet');
manager.addDocument('es', 'Hola, ¿me puedes explicar cómo funciona?', 'greet');
manager.addDocument('es', 'Buen día', 'greet');
manager.addDocument('es', '¿Cómo estás?', 'greet');
manager.addDocument('es', 'Qué gusto verte', 'greet');
manager.addDocument('es', 'Un placer saludarte', 'greet');
manager.addDocument('es', '¡Feliz día!', 'greet');
manager.addDocument('es', '¿Qué tal?', 'greet');
manager.addDocument('es', 'Hola, buenos días', 'greet');
manager.addDocument('es', 'Espero que estés bien', 'greet');
manager.addDocument('es', 'Saludos cordiales', 'greet');
manager.addDocument('es', '¡Buenas!', 'greet');
manager.addDocument('es', '¡Hola de nuevo!', 'greet');
manager.addDocument('es', '¿Cómo te va?', 'greet');
manager.addDocument('es', 'Es un placer estar aquí', 'greet');
manager.addDocument('es', 'Que tengas un excelente día', 'greet');
manager.addDocument('es', 'Espero que hayas tenido un buen fin de semana', 'greet');
manager.addDocument('es', 'Deseándote un buen comienzo de semana', 'greet');
manager.addDocument('es', '¡Hola! ¿Cómo puedo ayudarte hoy?', 'greet');
manager.addDocument('es', '¡Hola! ¿Qué te trae por aquí?', 'greet');
manager.addDocument('es', '¿En qué puedo servirte hoy?', 'greet');
manager.addDocument('es', 'Buenas tardes', 'greet');
manager.addDocument('es', 'Buenas noches', 'greet');
manager.addDocument('es', 'Buenos dias', 'greet');
manager.addDocument('es', 'Que tal', 'greet');

// Intenciones de consulta de productos
manager.addDocument('es', 'Informacion del curso de %product%', 'query.product');
manager.addDocument('es', 'Informacion de un producto  %product%', 'query.product');
manager.addDocument('es', '¿Tienen disponible cursos de %product%?', 'query.product');
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

// Intenciones para Consulta de precios
manager.addDocument('es', 'Cuanto cuesta?', 'query.price');
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
manager.addDocument('es', 'Adiós', 'saygoodbye');
manager.addDocument('es', 'Adiós por ahora', 'saygoodbye');
manager.addDocument('es', 'Hasta luego', 'saygoodbye');
manager.addDocument('es', 'Nos vemos', 'saygoodbye');
manager.addDocument('es', 'Hasta la próxima', 'saygoodbye');
manager.addDocument('es', 'Que tengas un buen día', 'saygoodbye');
manager.addDocument('es', 'Chao', 'saygoodbye');
manager.addDocument('es', 'Chauu', 'saygoodbye');

// Intenciones de Confirmacion
manager.addDocument('es', 'Si', 'affirm');
manager.addDocument('es', 'Si, por favor', 'affirm');
manager.addDocument('es', 'Afirmativo', 'affirm');
manager.addDocument('es', 'Afirmacion', 'affirm');
manager.addDocument('es', 'Me parece bien', 'affirm');
manager.addDocument('es', 'Estoy de acuerdo', 'affirm');
manager.addDocument('es', 'Por favor', 'affirm');

// Entities
manager.addNamedEntityText('name', 'name', ['es'], ['Mi nombre es', 'Me llamo', 'Soy'] )
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

const initPrompGpt = { role: 'system', content: `Quiero que actues como vendedor productos digitales enfocados en como ganar dinero extra o mejorar las finanzas personales. Tu nombre es JackBot. Tu mision va a ser lograr hacer conversiones (ventas) con respuestas cortas. Nunca salgas de tu personaje. Agrega emojis a las respuestas.` }
const context = {}

manager.addAnswer('es', 'greet', async ({ utterance, from }) => {
  const { isGreet, clientName } = context[from]

  if(!isGreet){
    const messages = [initPrompGpt, { role: 'system', content: `Saluda al cliente indicandole tu nombre. ${clientName ? 'Saluda al cliente con su nombre:' + clientName : ''} Pidele que indique que accion desea realizar y termina tu respuesta con la siguiente frase especificamente: "Selecciona una de las siguientes opciones:". No escribas ningun texto despues.` }, {role: 'user', content: utterance}]
    const gptCompletion = await getChatCompletion({ messages })
    context[from].isGreet = true
    return `${gptCompletion} \n\n 📚 Informacion de un producto.\n 🛒 Productos disponibles.\n 💰 Comprar un producto.\n 🎁 Consultar ofertas.\n 🤔 Recibir recomendaciones.\n 📞 Ser transferido a un asesor.`  
  }else {
    return `${clientName ?? ''} Por favor selecciona entre las siguientes opciones disponibles: 💼💰 \n\n 📚 Informacion de un producto (Nombre del producto).\n 🛒 Productos disponibles.\n 💰 Comprar un producto.\n 🎁 Consultar ofertas.\n 🤔 Recibir recomendaciones.\n 📞 Ser transferido a un asesor.`
  }
});

manager.addAnswer('es', 'saygoodbye', async ({ utterance }) => {
  const messages = [initPrompGpt, { role: 'system', content: 'El cliente se esta despidiendo, dale una despedida amable y finaliza por completo la conversacion END' }, { role: 'user', content: utterance }]
  return await getChatCompletion({ messages })
});

manager.addAnswer('es', 'query.product', async ({ utterance, entities, from }) => {
  const messages = [initPrompGpt]
  context[from].intent = 'query.product'
  let lsProducts = ''

  const entityProduct = entities.find((vl)=>vl.entity == 'product')
  if (entityProduct) {
    const product = products.find((val) => val.key == entityProduct.option)
    context[from].entities = entities

    messages.push({ role: 'system', content: `El cliente esta pidiendo informacion del producto ${product} convencelo de que este producto es la mejor opcion de compra. Envía el siguiente enlace tal como lo he proporcionado y sin cambiarlo por ningún otro texto: ${product.sales_page}` })
  } else {
    lsProducts = products.map((val) => `✅ ${val.name}`).join('\n')
    messages.push({ role: 'system', content: `El cliente está solicitando un producto que no existe. Termina tu mensaje escribiendo la siguiente frase y no la cambies por ningun texto: "Tenemos estos productos disponibles:". No escribas ningun texto despues.` })
  }

  messages.push({ role: 'user', content: utterance })
  return `${await getChatCompletion({ messages })} \n\n ${ lsProducts ?? ''}`
});

manager.addAnswer('es', 'query.price', async ({ entities })=>{
  let entityProduct = ''
  const messages = [initPrompGpt]

  entityProduct = entities.find((vl)=>vl.entity == 'product')
  if(!entityProduct) entityProduct = context[from].entities.find((vl)=>vl.entity == 'product')

  if(entityProduct) {
    const product = products.find((val) => val.key == entityProduct.option)
    messages.push({ role: 'system', content: `El Cliente esta solicitando precio del siguiente producto ${product.name} convencelo de que este producto es la mejor opcion de compra. Envia el siguiente precio como parte de la respuesta ${product.price} y envia el siguiente enlace sin cambiarlo por ningun texto para que realice la compra: ${product.checkout}` })
  } else {
    return 'Indica por favor de que producto deseas saber el precio.'
  }

  return await getChatCompletion({ messages })
})

manager.addAnswer('es', 'affirm', async ({ from }) => {
  const { intent, entities } = context[from]

  if (intent == 'query.product') {
    if (entities && entities.length > 0) {
      const product = products.find((val) => val.key == entities[0].option)
      return `💸 Todo lo que necesitas saber sobre este producto lo podras encontrar en el siguiente enlace: ${product.sales_page}, 🚀 no te arrepentiras`
    } else {
      let pr = products.map((val) => `${val.id}. ${val.name}: ${val.product_page}`)
      return pr.join('\n')
    }
  }
});

manager.train()

const process = async (message, from) => {
  try {
    // const { message, extraData } = req.body;
    // const { from } = extraData;
    if(!context[from]) context[from] = {}

    const process = await manager.process('es', message);
    const { utterance, entities } = process;

    await validateName({entities, utterance})

    const rs = typeof process.answer == 'function' ?
      await process.answer({ utterance, entities, from }) : 
      process.answer ?? 
      '🙈 Lo siento pero no puedo entender tu pregunta podrias replantearla'

    // res.send(rs);
    return rs
  } catch (error) {
    console.log(error);
  }
}

const validateName = async ({entities, utterance, from}) => {
  if(entities.some((vl)=>vl.entity === 'name')){
    const name = await getChatCompletion({ messages: [{role: 'system', content: 'Retorname unicamente y especificament el nombre de la persona del siguiente mensaje sin ningun texto adicional'}, {role: 'user', content: utterance}] })
    context[from].clientName = name.trim()
  }
}

module.exports = {
  process
}