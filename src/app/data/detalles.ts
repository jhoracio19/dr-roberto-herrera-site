export interface DetalleSeccion {
  h2: string;
  parrafos: string[];
  lista?: string[];
}

export interface DetalleFaq {
  pregunta: string;
  respuesta: string;
}

export interface DetallePagina {
  slug: string;
  seccion: string;
  seccionLabel: string;
  tipo: 'procedimiento' | 'padecimiento';
  nombre: string;
  titleTag: string;
  metaDescription: string;
  h1: string;
  intro: string;
  secciones: DetalleSeccion[];
  faqs: DetalleFaq[];
  ctaTexto: string;
  whatsappMensaje: string;
}

export const DETALLES: DetallePagina[] = [
  {
    slug: 'rinoplastia',
    seccion: 'esteticos',
    seccionLabel: 'Procedimientos Estéticos',
    tipo: 'procedimiento',
    nombre: 'Rinoplastia',
    titleTag: 'Rinoplastia en Tlaxcala | Dr. Roberto Herrera',
    metaDescription:
      'Rinoplastia en Tlaxcala con el Dr. Roberto Herrera, otorrinolaringólogo. Cirugía de nariz estética y funcional: armonía facial y mejor respiración.',
    h1: 'Rinoplastia: cirugía estética y funcional de nariz',
    intro:
      'La rinoplastia, también conocida como cirugía de nariz u operación de nariz, es uno de los procedimientos estéticos faciales más solicitados en nuestro consultorio en el centro de Tlaxcala. Su objetivo es mejorar la forma, el tamaño y la proporción de la nariz para lograr una mayor armonía facial, sin cambiar tu esencia: una nariz que se vea natural y adaptada a tus rasgos.\n\nA diferencia de otras cirugías puramente estéticas, cuando la realiza un otorrinolaringólogo la rinoplastia puede ser también funcional: además de mejorar la apariencia, busca conservar —y en muchos casos mejorar— tu respiración, corrigiendo al mismo tiempo problemas como la desviación del tabique nasal.',
    secciones: [
      {
        h2: '¿Qué es la rinoplastia y qué puede corregir?',
        parrafos: [
          'La rinoplastia es una cirugía que modifica las estructuras internas de la nariz (hueso y cartílago) para mejorar su proporción, simetría y funcionalidad. Puede abordar tanto motivos estéticos como defectos congénitos o secundarios a traumatismos, por ejemplo una nariz desviada después de un golpe.',
          'Cuando el objetivo incluye corregir una desviación del tabique que dificulta la respiración, el procedimiento se combina con una septumplastía; a esta cirugía conjunta se le conoce como rinoseptumplastía. En tu valoración se determina qué técnica es la adecuada para tu caso.',
        ],
        lista: [
          'Giba o "joroba" en el dorso nasal',
          'Punta nasal caída, ancha o poco definida',
          'Nariz desviada o asimétrica, congénita o por traumatismo',
          'Nariz percibida como muy grande o desproporcionada respecto al rostro',
          'Obstrucción nasal asociada a desviación del tabique',
        ],
      },
      {
        h2: '¿Cuándo se recomienda una rinoplastia?',
        parrafos: [
          'Se recomienda cuando la forma de tu nariz afecta tu seguridad o la percepción de tu rostro, cuando existe una deformidad por traumatismo, o cuando además hay dificultad para respirar por la nariz. En general se realiza una vez concluido el desarrollo facial, aproximadamente a partir de los 16-18 años.',
          'Cada rostro es único, por lo que no existe una nariz "ideal" universal: el plan quirúrgico se diseña en consulta, de forma personalizada, tras evaluar tu anatomía, tu salud general y tus expectativas. Por eso, el primer paso siempre es una valoración con el otorrinolaringólogo.',
        ],
      },
      {
        h2: '¿Cómo se realiza la cirugía de nariz?',
        parrafos: [
          'La rinoplastia se realiza en quirófano, generalmente bajo anestesia general, y tiene una duración aproximada de 2 a 3 horas. A través de incisiones discretas se remodelan el hueso y el cartílago para lograr el cambio planeado, cuidando siempre que la vía respiratoria quede permeable.',
          'El tipo de técnica y de anestesia se definen durante la consulta y la evaluación preoperatoria, de acuerdo con las características de tu nariz y los objetivos acordados contigo.',
        ],
      },
      {
        h2: 'Recuperación después de una rinoplastia',
        parrafos: [
          'La recuperación inicial toma entre 2 y 3 semanas. Durante los primeros días es normal presentar inflamación, congestión nasal y algunos moretones alrededor de los ojos, que van disminuyendo de manera gradual. La mayoría de los pacientes retoma sus actividades cotidianas ligeras en una o dos semanas.',
          'Aunque notarás cambios desde las primeras semanas, el resultado definitivo se aprecia entre 6 y 12 meses después de la cirugía, conforme la inflamación baja por completo. Seguir las indicaciones postoperatorias es clave para una buena evolución.',
        ],
        lista: [
          'Mantén la cabeza elevada al descansar durante los primeros días',
          'Evita ejercicio intenso, cargar peso y exponerte al sol directo las primeras semanas',
          'No uses lentes apoyados sobre el dorso nasal hasta que el médico lo indique',
          'Evita sonarte la nariz con fuerza durante la etapa inicial',
          'Acude puntualmente a tus citas de revisión postoperatoria',
        ],
      },
      {
        h2: 'Resultados reales: antes y después',
        parrafos: [
          'El objetivo de una rinoplastia bien planeada no es cambiar tu rostro, sino equilibrarlo: una nariz en armonía con tus facciones y que te permita respirar bien. Puedes explorar la galería de resultados de pacientes del Dr. Roberto Herrera en la sección de antes y después, con casos reales de rinoplastia atendidos en Tlaxcala.',
          'Recuerda que cada resultado depende de la anatomía y la evolución de cada paciente, por lo que los casos mostrados son ilustrativos y tu plan de tratamiento se define de manera individual en consulta.',
        ],
      },
    ],
    faqs: [
      {
        pregunta: '¿La rinoplastia puede mejorar mi respiración?',
        respuesta:
          'Sí, en muchos casos. Al ser realizada por un otorrinolaringólogo, la cirugía puede corregir al mismo tiempo problemas funcionales como la desviación del tabique (rinoseptumplastía). En tu valoración se determina si tu caso requiere este abordaje combinado.',
      },
      {
        pregunta: '¿Cuánto dura la cirugía y qué anestesia se utiliza?',
        respuesta:
          'La rinoplastia dura aproximadamente de 2 a 3 horas. Generalmente se realiza bajo anestesia general, aunque el tipo de anestesia adecuado para tu caso se define durante la consulta y la evaluación preoperatoria.',
      },
      {
        pregunta: '¿Cuánto tiempo tarda la recuperación de una rinoplastia?',
        respuesta:
          'La recuperación inicial toma entre 2 y 3 semanas, con inflamación y moretones que disminuyen de forma gradual. La mayoría de los pacientes retoma actividades ligeras en una o dos semanas, siguiendo las indicaciones postoperatorias.',
      },
      {
        pregunta: '¿Los resultados de la rinoplastia son inmediatos?',
        respuesta:
          'No. Aunque notarás cambios desde las primeras semanas, los resultados definitivos se aprecian entre 6 y 12 meses después de la cirugía, conforme baja la inflamación por completo. Por eso las revisiones de seguimiento son parte importante del proceso.',
      },
      {
        pregunta: '¿A partir de qué edad puedo operarme la nariz?',
        respuesta:
          'En general, la rinoplastia se recomienda una vez concluido el desarrollo facial, aproximadamente a partir de los 16-18 años. La edad adecuada y la viabilidad del procedimiento se confirman en una valoración individual con el doctor.',
      },
    ],
    ctaTexto:
      '¿Estás considerando una rinoplastia? Agenda tu valoración con el Dr. Roberto Herrera, otorrinolaringólogo en Tlaxcala, y resuelve todas tus dudas en consulta. Escríbenos por WhatsApp y recibe atención personalizada en nuestro consultorio en G. Valle 18, Centro.',
    whatsappMensaje:
      'Hola Dr. Roberto, vi su página web y me gustaría agendar una valoración para rinoplastia.',
  },
  {
    slug: 'septumplastia',
    seccion: 'cirugias',
    seccionLabel: 'Cirugías',
    tipo: 'procedimiento',
    nombre: 'Septumplastía (septoplastia)',
    titleTag: 'Septumplastía (septoplastia) en Tlaxcala | Dr. Roberto Herrera',
    metaDescription:
      'Septumplastía (septoplastia) en Tlaxcala: cirugía para corregir el tabique desviado y mejorar tu respiración. Agenda tu valoración con el Dr. Roberto Herrera.',
    h1: 'Septumplastía (septoplastia): cirugía de tabique desviado',
    intro:
      'Si sientes que el aire no pasa bien por una o ambas fosas nasales, que respiras por la boca al dormir o que la congestión nunca termina de irse, es posible que la causa sea un tabique nasal desviado. La septumplastía —también conocida como septoplastia— es la cirugía que corrige esta desviación, y es uno de los procedimientos que el Dr. Roberto Herrera, otorrinolaringólogo, realiza con mayor frecuencia; la valoración se lleva a cabo en nuestro consultorio en el centro de Tlaxcala.\n\nEn esta página te explicamos en qué consiste la cirugía de tabique desviado, cuándo se recomienda, cómo se realiza y qué esperar durante la recuperación. Recuerda que esta información es de carácter general: el diagnóstico y el plan de tratamiento adecuados para ti siempre se definen en una consulta de valoración.',
    secciones: [
      {
        h2: '¿Qué es la septumplastía?',
        parrafos: [
          'La septumplastía es una cirugía que corrige el tabique nasal desviado. El tabique es la pared de cartílago y hueso que divide la nariz en dos fosas nasales; cuando está desviado, estrecha el paso del aire por uno o ambos lados y dificulta una respiración nasal adecuada.',
          'El objetivo del procedimiento es funcional: mejorar el flujo de aire por la nariz y reducir los síntomas respiratorios asociados, como la obstrucción nasal crónica. A diferencia de la rinoplastia, la septumplastía no busca cambiar la forma externa de la nariz; cuando se desea corregir también la parte estética, ambos procedimientos pueden combinarse en una rinoseptumplastía.',
        ],
      },
      {
        h2: '¿Cuándo se recomienda la cirugía de tabique desviado?',
        parrafos: [
          'La desviación del tabique puede ser de nacimiento o consecuencia de un golpe o fractura nasal. No todas las desviaciones requieren cirugía: la septumplastía suele considerarse cuando la obstrucción afecta tu calidad de vida y los tratamientos con medicamentos no han sido suficientes. Algunos de los síntomas más frecuentes son:',
        ],
        lista: [
          'Obstrucción nasal constante, en una o ambas fosas nasales',
          'Respirar por la boca, sobre todo al dormir',
          'Ronquido o sueño poco reparador',
          'Congestión o presión nasal que no mejora con tratamiento médico',
          'Sangrados nasales frecuentes',
          'Infecciones repetidas de nariz o senos paranasales (sinusitis)',
          'Dolor de cabeza o facial asociado a la obstrucción',
        ],
      },
      {
        h2: '¿Cómo se realiza la septumplastía?',
        parrafos: [
          'El primer paso siempre es la valoración con el otorrinolaringólogo: mediante la exploración de la nariz —y estudios complementarios cuando se requieren— se confirma que la desviación del tabique es la causa de tus síntomas y se determina si eres candidato a la cirugía.',
          'La septumplastía se realiza por dentro de la nariz, por lo que normalmente no deja cicatrices visibles. Durante el procedimiento se endereza y reposiciona el cartílago y el hueso desviados para abrir el paso del aire. La cirugía se efectúa bajo anestesia general y suele durar entre 40 y 60 minutos, aunque la duración exacta depende de cada caso y se define en tu valoración previa.',
        ],
      },
      {
        h2: 'Recuperación después de la septumplastía',
        parrafos: [
          'La recuperación inicial suele tomar entre 7 y 10 días. Durante los primeros días es normal sentir la nariz congestionada, con inflamación y molestias leves que generalmente se controlan con el tratamiento indicado. La mejoría en la respiración se percibe de forma gradual conforme baja la inflamación.',
          'Para favorecer una buena recuperación, el Dr. Herrera te dará indicaciones personalizadas, que en términos generales incluyen:',
        ],
        lista: [
          'Reposo relativo y evitar ejercicio intenso durante los primeros días',
          'No sonarte la nariz con fuerza mientras cicatriza el tabique',
          'Dormir con la cabeza ligeramente elevada para reducir la inflamación',
          'Aplicar los lavados nasales o medicamentos tal como se te indiquen',
          'Evitar exponerte a polvo, humo y cambios bruscos de temperatura',
          'Acudir puntualmente a tus citas de revisión postoperatoria',
        ],
      },
    ],
    faqs: [
      {
        pregunta: '¿Septumplastía y septoplastia son lo mismo?',
        respuesta:
          'Sí. Septumplastía y septoplastia son dos nombres para la misma cirugía: la corrección del tabique nasal desviado. En México es común escuchar ambos términos, y en ocasiones también se le llama simplemente cirugía de tabique.',
      },
      {
        pregunta: '¿La septumplastía cambia la forma de mi nariz?',
        respuesta:
          'No. La septumplastía es una cirugía funcional que trabaja por dentro de la nariz para mejorar la respiración, por lo que no modifica la apariencia externa. Si además deseas un cambio estético, puede valorarse una rinoseptumplastía, que combina la corrección del tabique con una rinoplastia.',
      },
      {
        pregunta: '¿Cuánto dura la cirugía y qué anestesia se utiliza?',
        respuesta:
          'La septumplastía suele durar entre 40 y 60 minutos y se realiza bajo anestesia general. La duración y los detalles del procedimiento se confirman en tu valoración preoperatoria, ya que cada caso es diferente.',
      },
      {
        pregunta: '¿En cuánto tiempo puedo volver a mis actividades?',
        respuesta:
          'La recuperación inicial toma entre 7 y 10 días, y la mayoría de los pacientes retoma sus actividades cotidianas dentro de ese periodo. El ejercicio intenso y los esfuerzos físicos se reincorporan de manera gradual, según las indicaciones que recibas en tus revisiones.',
      },
      {
        pregunta: '¿El tabique desviado se puede corregir sin cirugía?',
        respuesta:
          'Los síntomas, como la congestión, a veces pueden controlarse con medicamentos, pero la desviación estructural del tabique solo se corrige mediante cirugía. En la consulta de valoración se determina si en tu caso conviene un manejo médico, la septumplastía u otra alternativa.',
      },
    ],
    ctaTexto:
      '¿Sientes que no respiras bien por la nariz? Agenda una valoración con el Dr. Roberto Herrera, otorrinolaringólogo en Tlaxcala, para saber si la septumplastía es la opción adecuada para ti. Encuéntranos en G. Valle 18, Centro, Tlaxcala, o escríbenos por WhatsApp para programar tu cita.',
    whatsappMensaje:
      'Hola, Dr. Herrera. Me gustaría agendar una valoración para septumplastía (cirugía de tabique desviado).',
  },
  {
    slug: 'cirugia-de-amigdalas',
    seccion: 'cirugias',
    seccionLabel: 'Cirugías',
    tipo: 'procedimiento',
    nombre: 'Cirugía de Amígdalas (Amigdalectomía)',
    titleTag: 'Cirugía de Amígdalas (Amigdalectomía) en Tlaxcala | Dr. Roberto Herrera',
    metaDescription:
      'Cirugía de amígdalas (amigdalectomía) en Tlaxcala con el Dr. Roberto Herrera, otorrinolaringólogo. Trata la amigdalitis de repetición en niños y adultos.',
    h1: 'Cirugía de Amígdalas (Amigdalectomía)',
    intro:
      '¿Tú o tu hijo padecen infecciones de garganta una y otra vez? Cuando la amigdalitis se vuelve de repetición, la cirugía de amígdalas —conocida como amigdalectomía o, popularmente, como operación de las anginas— puede ser la solución definitiva. En nuestro consultorio en el centro de Tlaxcala, el Dr. Roberto Herrera, otorrinolaringólogo, valora cada caso de forma individual para determinar si este procedimiento es la opción adecuada para ti o para tu familia.\n\nLa amigdalectomía es una de las cirugías más frecuentes en otorrinolaringología, tanto en niños como en adultos. Bien indicada, ayuda a eliminar las infecciones recurrentes y a mejorar la respiración y la deglución, con un impacto directo en la calidad de vida.',
    secciones: [
      {
        h2: '¿Qué es la cirugía de amígdalas?',
        parrafos: [
          'La amigdalectomía es la extirpación quirúrgica de las amígdalas, los dos tejidos linfáticos ubicados a ambos lados de la garganta. Forman parte del sistema de defensas, pero cuando se infectan de manera crónica o crecen demasiado, dejan de cumplir su función y se convierten en una fuente constante de molestias.',
          'Se trata de un procedimiento que se realiza bajo anestesia general y que suele durar entre 30 y 45 minutos. En algunos casos, sobre todo en niños, se combina con la extirpación de los adenoides cuando también están afectados; esto se define durante la valoración.',
        ],
      },
      {
        h2: '¿Cuándo se recomienda la amigdalectomía?',
        parrafos: [
          'No todas las amigdalitis requieren cirugía: la mayoría de los episodios aislados se resuelven con tratamiento médico. La amigdalectomía se considera cuando las amígdalas generan problemas de forma repetida o permanente. Las indicaciones más frecuentes son:',
        ],
        lista: [
          'Amigdalitis de repetición: varios episodios de infección al año, a pesar del tratamiento médico adecuado.',
          'Amígdalas crónicamente infectadas que provocan dolor de garganta persistente o mal aliento.',
          'Amígdalas muy crecidas (hipertrofia) que causan obstrucción respiratoria, ronquido o pausas en la respiración al dormir.',
          'Dificultad para deglutir los alimentos por el tamaño de las amígdalas.',
          'Abscesos periamigdalinos (acumulaciones de pus alrededor de la amígdala), especialmente si se repiten.',
        ],
      },
      {
        h2: '¿Cómo se realiza la cirugía?',
        parrafos: [
          'Antes de programar la cirugía, el Dr. Roberto Herrera realiza una valoración completa: revisa tu historial de infecciones, explora la garganta y solicita los estudios preoperatorios necesarios para confirmar que la amigdalectomía es la mejor opción en tu caso.',
          'El procedimiento se realiza bajo anestesia general, por lo que el paciente no siente dolor durante la operación. A través de la boca, sin incisiones externas ni cicatrices visibles, se extirpan ambas amígdalas. La cirugía dura entre 30 y 45 minutos, y el tiempo de observación posterior depende de la edad y las condiciones de cada paciente.',
        ],
      },
      {
        h2: 'Recuperación después de la cirugía de amígdalas',
        parrafos: [
          'La recuperación toma entre 7 y 14 días. Es normal sentir dolor de garganta los primeros días —a veces reflejado hacia los oídos—, que se controla con los medicamentos indicados. Para una recuperación adecuada, te recomendamos:',
        ],
        lista: [
          'Seguir una dieta blanda y fresca los primeros días (gelatinas, helados, purés), evitando alimentos calientes, ácidos o con bordes duros.',
          'Mantener una buena hidratación, tomando líquidos con frecuencia.',
          'Guardar reposo relativo y evitar esfuerzos físicos intensos durante las primeras dos semanas.',
          'Tomar los medicamentos exactamente como fueron indicados, sin suspenderlos por cuenta propia.',
          'Acudir de inmediato a valoración si se presenta sangrado por la boca, fiebre alta o imposibilidad para tomar líquidos.',
        ],
      },
      {
        h2: 'Amigdalectomía en niños y adultos',
        parrafos: [
          'En los niños, la amigdalitis de repetición y el crecimiento de las amígdalas son especialmente frecuentes, y pueden afectar el sueño, la alimentación y el rendimiento escolar. En ellos, la cirugía suele tener una recuperación más rápida y un beneficio muy notorio cuando está bien indicada.',
          'En los adultos, la amigdalectomía se realiza principalmente por infecciones crónicas o recurrentes y por abscesos de repetición. La recuperación tiende a ser algo más molesta que en los niños, pero sigue el mismo rango de 7 a 14 días. En ambos casos, la decisión de operar se toma de manera individual, tras una valoración completa con el otorrinolaringólogo.',
        ],
      },
    ],
    faqs: [
      {
        pregunta: '¿Cuántas amigdalitis al año justifican operar las amígdalas?',
        respuesta:
          'No existe un número único que aplique a todos los pacientes. En general, se considera la cirugía cuando las infecciones se repiten varias veces al año a pesar del tratamiento médico, o cuando afectan de forma importante la vida diaria. El Dr. Roberto Herrera evalúa tu historial completo antes de recomendar la amigdalectomía.',
      },
      {
        pregunta: '¿Quitar las amígdalas baja las defensas?',
        respuesta:
          'Las amígdalas son solo una parte del sistema inmunológico, que cuenta con muchos otros tejidos que continúan cumpliendo esa función. Cuando están crónicamente infectadas, dejan de proteger y se convierten en un foco de infección. Por eso, retirarlas en los casos bien indicados suele traer más beneficios que inconvenientes.',
      },
      {
        pregunta: '¿Es dolorosa la recuperación de la amigdalectomía?',
        respuesta:
          'Es normal tener dolor de garganta durante los primeros días, en ocasiones con molestia reflejada hacia los oídos. El dolor se controla con los analgésicos indicados y mejora de forma progresiva. La mayoría de los pacientes se recupera por completo en un plazo de 7 a 14 días.',
      },
      {
        pregunta: '¿A qué edad se puede realizar la cirugía de amígdalas?',
        respuesta:
          'Puede realizarse tanto en niños como en adultos. La edad adecuada depende del motivo de la cirugía, el estado de salud general y la severidad de los síntomas. En la consulta de valoración se determina el momento más conveniente para cada paciente.',
      },
      {
        pregunta: '¿Pueden volver a crecer las amígdalas después de operarlas?',
        respuesta:
          'Cuando las amígdalas se extirpan por completo, es muy poco común que vuelvan a dar problemas. En ocasiones puede quedar una pequeña cantidad de tejido que rara vez causa síntomas. Las revisiones posteriores a la cirugía permiten verificar que la evolución sea la esperada.',
      },
    ],
    ctaTexto:
      'Si las infecciones de garganta se han vuelto parte de tu vida o de la de tu hijo, no lo dejes pasar. Agenda una valoración con el Dr. Roberto Herrera, otorrinolaringólogo en Tlaxcala, y conoce si la cirugía de amígdalas es la opción adecuada para tu caso. Escríbenos por WhatsApp o visítanos en G. Valle 18, Centro, Tlaxcala.',
    whatsappMensaje:
      'Hola, Dr. Herrera. Me interesa una valoración para cirugía de amígdalas (amigdalectomía). ¿Me podría compartir la disponibilidad para agendar una cita?',
  },
  {
    slug: 'cirugia-de-adenoides',
    seccion: 'cirugias',
    seccionLabel: 'Cirugías',
    tipo: 'procedimiento',
    nombre: 'Cirugía de Adenoides (Adenoidectomía)',
    titleTag: 'Cirugía de Adenoides (Adenoidectomía) en Tlaxcala | Dr. Roberto Herrera',
    metaDescription:
      'Cirugía de adenoides (adenoidectomía) en Tlaxcala. Dr. Roberto Herrera, otorrinolaringólogo. Valoración de respiración bucal, ronquido y otitis en niños.',
    h1: 'Cirugía de Adenoides (Adenoidectomía)',
    intro:
      'Si tu hijo respira casi siempre por la boca, ronca al dormir o acumula una otitis tras otra, es posible que las adenoides (también llamadas vegetaciones adenoideas) hayan crecido demasiado y estén obstruyendo su vía respiratoria. En nuestro consultorio en el centro de Tlaxcala, el Dr. Roberto Herrera, otorrinolaringólogo, valora cada caso de forma individual para determinar si la cirugía de adenoides es la opción adecuada para tu pequeño.\n\nLa adenoidectomía es uno de los procedimientos más frecuentes en otorrinolaringología infantil. Aquí te explicamos en qué consiste, cuándo se recomienda y cómo es la recuperación, para que llegues a la consulta con información clara y puedas resolver todas tus dudas.',
    secciones: [
      {
        h2: '¿Qué es la cirugía de adenoides?',
        parrafos: [
          'Las adenoides son un tejido linfático ubicado en la parte posterior de la nariz, detrás del paladar. En los niños forman parte del sistema de defensas, pero cuando crecen en exceso pueden obstruir las vías respiratorias y afectar la audición, al bloquear el paso del aire y la ventilación del oído medio.',
          'La cirugía de adenoides o adenoidectomía consiste en retirar este tejido crecido para liberar la vía respiratoria. Es un procedimiento breve que se realiza a través de la boca, por lo que no deja cicatrices visibles en el rostro ni en el cuello.',
        ],
      },
      {
        h2: '¿Cuándo se recomienda la adenoidectomía en niños?',
        parrafos: [
          'No todos los niños con adenoides crecidas necesitan operarse. La cirugía suele considerarse cuando los síntomas son persistentes, no mejoran con tratamiento médico y afectan el descanso, la audición o el desarrollo del niño. Las señales más frecuentes son:',
        ],
        lista: [
          'Respiración bucal constante, de día y de noche',
          'Ronquido infantil y sueño inquieto o interrumpido',
          'Otitis recurrente o líquido persistente en el oído medio',
          'Dificultad para respirar por la nariz y congestión continua',
          'Hablar con voz nasal',
          'Infecciones respiratorias frecuentes o sinusitis repetidas',
        ],
      },
      {
        h2: '¿Cómo se realiza la cirugía de adenoides?',
        parrafos: [
          'La adenoidectomía se realiza bajo anestesia general, de modo que el niño permanece dormido y no siente dolor durante el procedimiento. El otorrinolaringólogo retira el tejido adenoideo a través de la boca, sin cortes externos, en una intervención que en la mayoría de los casos toma menos de una hora.',
          'Generalmente es un procedimiento ambulatorio: tras unas horas de observación, el paciente puede regresar a casa el mismo día. Cuando las amígdalas también están crecidas o se infectan con frecuencia, puede valorarse retirarlas en la misma cirugía (adenoamigdalectomía); esa decisión se toma en la consulta, según cada caso.',
        ],
      },
      {
        h2: 'Recuperación y cuidados después de la operación de adenoides',
        parrafos: [
          'La recuperación suele ser rápida: la mayoría de los niños retoma sus actividades habituales en pocos días, y muchas familias notan desde las primeras semanas que el pequeño respira mejor por la nariz y duerme más tranquilo. Durante los primeros días es normal cierta molestia en la garganta, voz ligeramente nasal o mal aliento temporal.',
          'Para una recuperación sin complicaciones, en general se recomienda:',
        ],
        lista: [
          'Ofrecer líquidos abundantes y alimentos suaves y frescos los primeros días',
          'Evitar esfuerzos físicos intensos y deportes durante la primera semana',
          'Administrar únicamente los medicamentos indicados por el médico',
          'Acudir a las citas de revisión para confirmar una cicatrización adecuada',
          'Contactar al doctor si aparece sangrado, fiebre alta o dolor que no cede',
        ],
      },
    ],
    faqs: [
      {
        pregunta: '¿A qué edad se puede operar a un niño de las adenoides?',
        respuesta:
          'La adenoidectomía se realiza con mayor frecuencia en niños en edad preescolar y escolar, que es cuando las adenoides crecidas suelen dar más síntomas. No existe una edad única: la decisión depende de la intensidad de los síntomas y de la valoración del otorrinolaringólogo en consulta.',
      },
      {
        pregunta: '¿La cirugía de adenoides deja cicatriz?',
        respuesta:
          'No deja cicatrices visibles. El tejido adenoideo se retira a través de la boca, sin cortes en la piel del rostro o del cuello, por lo que no hay marcas externas.',
      },
      {
        pregunta: '¿Se pueden quitar las adenoides y las amígdalas en la misma cirugía?',
        respuesta:
          'Sí, es algo frecuente cuando ambas estructuras están crecidas o causan infecciones de repetición; el procedimiento combinado se conoce como adenoamigdalectomía. Si conviene o no en el caso de tu hijo se define durante la valoración preoperatoria.',
      },
      {
        pregunta: '¿Las adenoides pueden volver a crecer después de la cirugía?',
        respuesta:
          'Es poco común, pero puede quedar o volver a crecer una pequeña porción de tejido, sobre todo en niños operados a edad muy temprana. Por eso es importante acudir a las revisiones posteriores y consultar si los síntomas reaparecen.',
      },
      {
        pregunta: '¿Cuándo puede regresar mi hijo a la escuela?',
        respuesta:
          'En la mayoría de los casos, los niños pueden volver a la escuela en aproximadamente una semana, evitando deportes y esfuerzos intensos los primeros días. El tiempo exacto depende de la evolución de cada paciente y lo indicará el doctor en la revisión postoperatoria.',
      },
    ],
    ctaTexto:
      '¿Tu hijo respira por la boca, ronca o tiene otitis repetidas? Agenda una valoración con el Dr. Roberto Herrera, otorrinolaringólogo en Tlaxcala. En consulta se revisa su caso y se determina si la cirugía de adenoides es la mejor opción. Escríbenos por WhatsApp o visítanos en G. Valle 18, Centro, Tlaxcala.',
    whatsappMensaje:
      'Hola, Dr. Herrera. Me gustaría agendar una valoración para cirugía de adenoides para mi hijo(a).',
  },
  {
    slug: 'sinusitis',
    seccion: 'enfermedades',
    seccionLabel: 'Enfermedades',
    tipo: 'padecimiento',
    nombre: 'Sinusitis',
    titleTag: 'Sinusitis en Tlaxcala | Dr. Roberto Herrera',
    metaDescription:
      'Tratamiento de sinusitis aguda y crónica en Tlaxcala con el Dr. Roberto Herrera, otorrinolaringólogo. Síntomas, causas y opciones médicas y quirúrgicas.',
    h1: 'Sinusitis: síntomas, causas y tratamiento',
    intro:
      'La sinusitis es la infección o inflamación de los senos paranasales, las cavidades llenas de aire que rodean la nariz. Cuando se inflaman, el moco no drena correctamente, lo que dificulta la respiración y causa dolor facial, congestión y presión en la cara o la frente. Es uno de los motivos de consulta más frecuentes que atendemos en nuestro consultorio en el centro de Tlaxcala, y aunque muchas veces se confunde con una gripa que "no se quita", requiere una valoración específica para tratarla de forma adecuada.\n\nSi llevas días o semanas con congestión persistente, secreción nasal espesa y dolor de cara o cabeza, es momento de acudir con un otorrinolaringólogo. En esta página te explicamos qué es la sinusitis, cómo reconocerla, cuáles son sus causas y qué opciones de tratamiento existen, desde medicamentos hasta cirugía en los casos que lo ameritan.',
    secciones: [
      {
        h2: '¿Qué es la sinusitis y qué tipos existen?',
        parrafos: [
          'La sinusitis (también llamada rinosinusitis) ocurre cuando la mucosa que recubre los senos paranasales se inflama y bloquea el drenaje natural del moco. Ese moco acumulado genera presión, dolor y un ambiente propicio para las infecciones.',
          'Según su duración, se clasifica en dos tipos principales: la sinusitis aguda, que suele aparecer después de una gripa o resfriado y dura menos de cuatro semanas, y la sinusitis crónica, cuando los síntomas persisten por doce semanas o más a pesar del tratamiento. Identificar de qué tipo se trata es clave, porque cada una se maneja de forma distinta.',
        ],
      },
      {
        h2: 'Síntomas de la sinusitis',
        parrafos: [
          'Los síntomas pueden variar de una persona a otra, pero los más característicos son:',
        ],
        lista: [
          'Dolor o presión en la cara, la frente o alrededor de los ojos',
          'Secreción nasal espesa, amarillenta o verdosa',
          'Congestión nasal persistente que dificulta respirar por la nariz',
          'Fiebre, sobre todo en los cuadros agudos',
          'Dolor de cabeza que empeora al agacharse',
          'Disminución del olfato y sensación de moco que baja por la garganta',
          'Mal aliento o tos que se acentúa por la noche',
        ],
      },
      {
        h2: '¿Por qué da sinusitis? Causas más comunes',
        parrafos: [
          'La causa más frecuente de la sinusitis aguda es una infección viral, como la de un resfriado común, que en algunos casos se complica con una infección bacteriana. Sin embargo, existen otros factores que favorecen que los senos paranasales se inflamen o que la sinusitis se vuelva crónica:',
        ],
        lista: [
          'Rinitis alérgica o exposición frecuente a polvo, humo e irritantes',
          'Desviación del tabique nasal que obstruye el drenaje del moco',
          'Pólipos nasales u otros crecimientos en la cavidad nasal',
          'Crecimiento de los cornetes (hipertrofia de cornetes)',
          'Cambios bruscos de temperatura y clima seco',
          'Infecciones dentales en piezas cercanas a los senos maxilares',
        ],
      },
      {
        h2: '¿Cuándo acudir al otorrinolaringólogo?',
        parrafos: [
          'Una sinusitis leve posterior a una gripa puede mejorar en pocos días con cuidados generales. Sin embargo, te recomendamos acudir a valoración con un otorrinolaringólogo si los síntomas duran más de diez días, si mejoran y luego empeoran de nuevo, si presentas fiebre alta o dolor facial intenso, o si tienes cuadros de sinusitis que se repiten varias veces al año.',
          'En consulta, el Dr. Roberto Herrera revisa tu nariz y senos paranasales, generalmente con ayuda de una endoscopia nasal, y cuando es necesario solicita estudios de imagen como la tomografía. Esto permite identificar la causa de fondo —una alergia, una desviación del tabique, pólipos nasales— y no solo tratar los síntomas.',
        ],
      },
      {
        h2: 'Tratamiento de la sinusitis: opciones médicas y quirúrgicas',
        parrafos: [
          'La mayoría de los casos de sinusitis se resuelven con tratamiento médico. Dependiendo de la causa, este puede incluir lavados nasales con solución salina, esprays nasales con corticoide, antihistamínicos cuando hay un componente alérgico y antibióticos únicamente cuando se confirma una infección bacteriana. El esquema exacto se define en tu valoración, según tu caso particular.',
          'Cuando la sinusitis es crónica y no responde al tratamiento médico, o cuando existe una obstrucción anatómica, puede recomendarse una solución quirúrgica. La cirugía endoscópica de senos paranasales se realiza por dentro de la nariz, sin cortes externos, para abrir los sitios de drenaje y retirar el tejido inflamado o los pólipos. En casos con desviación del tabique, puede combinarse con una septumplastía para mejorar también la respiración.',
          'Después de la cirugía, la recuperación suele tomar algunos días de reposo relativo, con lavados nasales y citas de seguimiento para verificar una adecuada cicatrización. El Dr. Herrera te indicará los cuidados específicos según el procedimiento realizado.',
        ],
      },
    ],
    faqs: [
      {
        pregunta: '¿Cómo sé si tengo sinusitis o solo es una gripa?',
        respuesta:
          'Una gripa suele mejorar en una semana. Si la congestión, la secreción nasal espesa y el dolor de cara o frente duran más de diez días, o mejoran y vuelven a empeorar, es probable que se trate de sinusitis. Una valoración con el otorrinolaringólogo permite confirmarlo y tratarla correctamente.',
      },
      {
        pregunta: '¿La sinusitis se quita sola o siempre necesita antibiótico?',
        respuesta:
          'Muchos cuadros agudos son virales y mejoran con lavados nasales, hidratación y tratamiento para los síntomas. El antibiótico solo se indica cuando hay datos de infección bacteriana, por eso no es recomendable automedicarse. El tratamiento adecuado depende de la causa, que se determina en consulta.',
      },
      {
        pregunta: '¿Qué pasa si no trato una sinusitis crónica?',
        respuesta:
          'Una sinusitis crónica sin tratamiento afecta la calidad de vida: congestión constante, dolor facial, mal descanso y pérdida del olfato. En casos poco frecuentes, la infección puede extenderse a estructuras cercanas. Por eso conviene atenderla a tiempo con un especialista.',
      },
      {
        pregunta: '¿En qué casos se necesita cirugía para la sinusitis?',
        respuesta:
          'La cirugía se considera cuando la sinusitis crónica no mejora con tratamiento médico o cuando hay una causa anatómica, como pólipos nasales o desviación del tabique. Se realiza por vía endoscópica, a través de la nariz y sin cortes externos. La indicación exacta se define tras la valoración y los estudios correspondientes.',
      },
      {
        pregunta: '¿Atienden sinusitis en niños?',
        respuesta:
          'Sí. Los niños también pueden presentar sinusitis, sobre todo después de infecciones respiratorias frecuentes. En consulta se evalúa cada caso para ofrecer el tratamiento más adecuado según la edad y la causa.',
      },
    ],
    ctaTexto:
      '¿Llevas semanas con congestión, dolor facial o secreción nasal que no mejora? Agenda una valoración con el Dr. Roberto Herrera, otorrinolaringólogo en Tlaxcala, y recibe un diagnóstico preciso y un plan de tratamiento a tu medida. Escríbenos por WhatsApp o visítanos en G. Valle 18, Centro, Tlaxcala.',
    whatsappMensaje:
      'Hola, Dr. Herrera. Tengo síntomas de sinusitis y me gustaría agendar una valoración.',
  },
  {
    slug: 'vertigo',
    seccion: 'enfermedades',
    seccionLabel: 'Enfermedades',
    tipo: 'padecimiento',
    nombre: 'Vértigo',
    titleTag: 'Vértigo en Tlaxcala | Dr. Roberto Herrera',
    metaDescription:
      '¿Sufres vértigo o mareos? Diagnóstico otoneurológico del vértigo postural y síndrome de Ménière en Tlaxcala con el Dr. Roberto Herrera, otorrinolaringólogo.',
    h1: 'Vértigo: diagnóstico y tratamiento en Tlaxcala',
    intro:
      'Si sientes que todo gira a tu alrededor al levantarte de la cama, girar la cabeza o agacharte, es probable que estés experimentando vértigo. Es uno de los motivos de consulta más frecuentes en otorrinolaringología y, en la mayoría de los casos, su origen está en el oído interno. En nuestro consultorio en el centro de Tlaxcala, el Dr. Roberto Herrera realiza una valoración otoneurológica completa para identificar la causa de tus mareos y ofrecerte un tratamiento adecuado a tu caso.\n\nAunque el vértigo puede ser muy incapacitante y generar angustia, la buena noticia es que muchas de sus causas, como el vértigo postural paroxístico benigno, tienen tratamiento. El primer paso es un diagnóstico preciso que distinga entre un problema del oído y otras posibles causas.',
    secciones: [
      {
        h2: '¿Qué es el vértigo y en qué se diferencia del mareo?',
        parrafos: [
          "El vértigo es una sensación de giro o movimiento: sientes que tú o el entorno dan vueltas, aunque estés quieto. El mareo, en cambio, es un término más general que incluye sensaciones de inestabilidad, aturdimiento o 'cabeza ligera' sin esa percepción de giro. Esta diferencia es importante porque orienta el diagnóstico: el vértigo verdadero suele relacionarse con el oído interno, que es el órgano encargado del equilibrio, mientras que otros tipos de mareo pueden tener causas distintas (presión arterial, medicamentos, ansiedad, entre otras).",
          'Describir bien lo que sientes —si gira el entorno, cuánto duran los episodios, qué los desencadena y si se acompañan de náuseas, zumbido o pérdida de audición— ayuda al otorrinolaringólogo a identificar el origen del problema.',
        ],
      },
      {
        h2: 'Causas más comunes: vértigo postural y síndrome de Ménière',
        parrafos: [
          'La causa más frecuente de vértigo de origen del oído es el vértigo postural paroxístico benigno (VPPB), un trastorno del oído interno que provoca mareos intensos al mover la cabeza en ciertas posiciones: al acostarte, girarte en la cama o mirar hacia arriba. Los episodios son breves pero intensos y pueden acompañarse de náuseas y pérdida de equilibrio.',
          'Otra causa relevante es el síndrome de Ménière, un trastorno crónico del oído interno que afecta tanto el equilibrio como la audición. A diferencia del VPPB, sus crisis de vértigo suelen durar más tiempo y se acompañan de síntomas auditivos.',
        ],
        lista: [
          'Vértigo postural paroxístico benigno: mareos breves e intensos desencadenados por movimientos de la cabeza',
          'Síndrome de Ménière: episodios de vértigo, zumbido (tinnitus), presión en el oído y pérdida progresiva de audición',
          'Neuritis vestibular: inflamación del nervio del equilibrio, con vértigo prolongado',
          'Infecciones o inflamación del oído que afectan temporalmente el equilibrio',
        ],
      },
      {
        h2: '¿Cómo se realiza el diagnóstico otoneurológico?',
        parrafos: [
          'El diagnóstico comienza con una historia clínica detallada y la exploración del oído, seguida de una valoración otoneurológica: maniobras posicionales que reproducen el vértigo de forma controlada para confirmar si se trata de un VPPB y de qué lado está afectado, además de la evaluación del equilibrio y de los movimientos oculares.',
          'Cuando hay síntomas auditivos, como zumbido o disminución de la audición, se complementa con una audiometría para valorar el estado del oído interno. En casos seleccionados pueden solicitarse estudios de imagen para descartar otras causas. Cada caso es distinto, por lo que los estudios necesarios se definen durante tu consulta.',
        ],
      },
      {
        h2: '¿Cuál es el tratamiento del vértigo?',
        parrafos: [
          'El tratamiento depende de la causa. En el vértigo postural paroxístico benigno, las maniobras de reposicionamiento realizadas en consultorio buscan recolocar las partículas del oído interno que provocan los mareos; suelen ser rápidas, no requieren cirugía y en muchos pacientes producen mejoría notable.',
          'En el síndrome de Ménière, el manejo es integral: medicamentos para controlar las crisis, ajustes en la alimentación (como reducir el consumo de sal) y seguimiento de la audición. En otros tipos de vértigo pueden indicarse medicamentos específicos o ejercicios de rehabilitación vestibular para reentrenar el equilibrio.',
        ],
        lista: [
          'Maniobras de reposicionamiento para el vértigo postural',
          'Medicamentos para controlar las crisis de vértigo y las náuseas',
          'Rehabilitación vestibular (ejercicios de equilibrio)',
          'Cambios en hábitos y alimentación en casos de síndrome de Ménière',
        ],
      },
      {
        h2: '¿Cuándo acudir al otorrinolaringólogo?',
        parrafos: [
          'Te recomendamos agendar una valoración si el vértigo se repite, interfiere con tus actividades diarias o se acompaña de zumbido, presión en el oído o disminución de la audición. Si el vértigo aparece junto con dolor de cabeza intenso, visión doble, dificultad para hablar o debilidad en alguna parte del cuerpo, busca atención médica de inmediato, ya que podría tratarse de una causa que requiere atención urgente.',
        ],
      },
    ],
    faqs: [
      {
        pregunta: '¿El vértigo postural es peligroso?',
        respuesta:
          'El vértigo postural paroxístico benigno, como su nombre lo indica, no pone en riesgo tu vida. Sin embargo, los episodios pueden provocar caídas y limitar tus actividades, por lo que conviene tratarlo. Con las maniobras de reposicionamiento adecuadas, muchos pacientes mejoran de forma notable.',
      },
      {
        pregunta: '¿Cómo sé si mi mareo viene del oído?',
        respuesta:
          'Cuando el mareo es una sensación clara de giro, se desencadena con movimientos de la cabeza o se acompaña de zumbido, presión en el oído o pérdida de audición, es probable que el origen esté en el oído interno. La valoración otoneurológica permite confirmarlo y descartar otras causas.',
      },
      {
        pregunta: '¿El síndrome de Ménière tiene tratamiento?',
        respuesta:
          'Sí. Aunque es un trastorno crónico, existen medicamentos, ajustes en la alimentación y medidas de seguimiento que ayudan a controlar las crisis de vértigo y a cuidar la audición. El plan de manejo se define de acuerdo con la evolución de cada paciente.',
      },
      {
        pregunta: '¿Qué estudios necesito para diagnosticar el vértigo?',
        respuesta:
          'En la mayoría de los casos, la historia clínica, la exploración del oído y las maniobras posicionales en consultorio son suficientes para orientar el diagnóstico. Si hay síntomas auditivos se agrega una audiometría, y solo en casos seleccionados se solicitan estudios de imagen. Si ya cuentas con estudios previos, llévalos a tu consulta.',
      },
      {
        pregunta: '¿Puedo manejar o trabajar si tengo vértigo?',
        respuesta:
          'Durante los episodios activos es recomendable evitar manejar, subir escaleras sin apoyo o realizar actividades de riesgo, ya que el vértigo puede provocar caídas. Una vez diagnosticada y tratada la causa, la mayoría de los pacientes retoma sus actividades con normalidad.',
      },
    ],
    ctaTexto:
      '¿Los mareos o el vértigo están afectando tu día a día? Agenda una valoración con el Dr. Roberto Herrera, otorrinolaringólogo en el centro de Tlaxcala, para identificar la causa de tu vértigo y comenzar el tratamiento adecuado para tu caso. Escríbenos por WhatsApp y con gusto te atenderemos.',
    whatsappMensaje:
      'Hola, Dr. Herrera. He tenido vértigo o mareos y me gustaría agendar una valoración. ¿Me podría indicar disponibilidad?',
  },
  {
    slug: 'apnea-del-sueno',
    seccion: 'enfermedades',
    seccionLabel: 'Enfermedades',
    tipo: 'padecimiento',
    nombre: 'Apnea del Sueño',
    titleTag: 'Apnea del Sueño en Tlaxcala | Dr. Roberto Herrera',
    metaDescription:
      'Apnea del sueño y ronquido en Tlaxcala: señales de alarma, consecuencias y tratamientos como la uvulectomía. Dr. Roberto Herrera, otorrinolaringólogo.',
    h1: 'Apnea del sueño y ronquido: cuándo acudir al otorrinolaringólogo',
    intro:
      '¿Te han dicho que roncas muy fuerte o que dejas de respirar por momentos mientras duermes? El ronquido constante no siempre es solo una molestia para quien duerme a tu lado: puede ser la señal más visible de la apnea del sueño, un trastorno en el que la respiración se interrumpe repetidamente durante la noche debido a una obstrucción en la garganta. En nuestro consultorio en el centro de Tlaxcala, el Dr. Roberto Herrera, otorrinolaringólogo, valora este tipo de problemas de forma integral para encontrar la causa de la obstrucción y el tratamiento más adecuado para ti.\n\nDetectarla a tiempo marca una gran diferencia: la apnea obstructiva del sueño afecta tu descanso, tu energía durante el día y, con el tiempo, puede repercutir en tu salud general. Aquí te explicamos qué es, cómo reconocerla y qué opciones de tratamiento existen.',
    secciones: [
      {
        h2: '¿Qué es la apnea del sueño?',
        parrafos: [
          'La apnea del sueño es un trastorno en el que la respiración se interrumpe de manera repetida mientras duermes. En su forma más común, la apnea obstructiva, los tejidos de la garganta —como el paladar blando, la úvula (campanilla) o la base de la lengua— se relajan y bloquean el paso del aire. Cada pausa obliga a tu cuerpo a despertarse brevemente para volver a respirar, aunque muchas veces no lo recuerdes al día siguiente.',
          'Por eso una persona con apnea puede dormir muchas horas y aun así levantarse cansada: su sueño se fragmenta decenas de veces durante la noche sin que lo note. El ronquido intenso suele ser el primer indicio, aunque no toda persona que ronca tiene apnea; de ahí la importancia de una valoración profesional.',
        ],
      },
      {
        h2: 'Señales de alarma: ¿cuándo preocuparse por el ronquido?',
        parrafos: [
          'Te recomendamos acudir a valoración con un otorrinolaringólogo si tú o tu pareja identifican una o varias de estas señales:',
        ],
        lista: [
          'Ronquidos intensos y frecuentes, casi todas las noches',
          'Pausas en la respiración observadas por otra persona mientras duermes',
          'Despertares con sensación de ahogo o falta de aire',
          'Somnolencia diurna: te quedas dormido viendo televisión, en el trabajo o incluso al conducir',
          'Cansancio al despertar, como si no hubieras descansado',
          'Dolor de cabeza matutino, boca seca o irritabilidad frecuente',
          'Dificultad para concentrarte durante el día',
        ],
      },
      {
        h2: 'Consecuencias de no atender la apnea del sueño',
        parrafos: [
          'Más allá del descanso, la apnea del sueño no tratada puede tener consecuencias importantes. Las pausas respiratorias repetidas reducen la oxigenación durante la noche y someten al corazón y a la circulación a un esfuerzo constante, lo que con el tiempo se asocia a problemas como presión arterial elevada y otras complicaciones cardiovasculares y metabólicas.',
          'En el día a día, la somnolencia aumenta el riesgo de accidentes al conducir o manejar maquinaria, y el cansancio crónico afecta tu rendimiento, tu memoria y tu estado de ánimo. También influye en la convivencia: el ronquido intenso suele alterar el descanso de la pareja. Atenderla a tiempo permite evitar que el problema avance.',
        ],
      },
      {
        h2: 'Tratamiento: desde cambios de hábitos hasta la uvulectomía',
        parrafos: [
          'El tratamiento depende de la causa y la severidad de cada caso, por lo que todo inicia con una valoración completa de nariz y garganta para identificar dónde se obstruye el paso del aire. En casos leves, medidas como bajar de peso, evitar el alcohol antes de dormir y modificar la posición al dormir pueden ayudar; en otros, se valoran dispositivos de presión de aire (CPAP) u opciones quirúrgicas.',
          'Cuando el ronquido crónico o la apnea obstructiva leve se originan en el paladar blando y la úvula, una opción es la cirugía de uvulectomía: la extirpación parcial o total de la úvula para disminuir el ronquido y mejorar el paso del aire por la garganta. Es un procedimiento breve, de aproximadamente 20 a 30 minutos, que puede realizarse con anestesia local o general, con una recuperación habitual de 5 a 10 días.',
          'Si la obstrucción también involucra la nariz —por ejemplo, por desviación del tabique o cornetes crecidos—, el Dr. Herrera puede valorar procedimientos complementarios. Cada caso es distinto, y solo tras la exploración se define si eres candidato a cirugía o a otro tipo de manejo.',
        ],
      },
    ],
    faqs: [
      {
        pregunta: '¿Roncar siempre significa tener apnea del sueño?',
        respuesta:
          'No necesariamente. Muchas personas roncan sin presentar pausas en la respiración. Sin embargo, si el ronquido es intenso, constante o se acompaña de pausas respiratorias y somnolencia diurna, es importante acudir a valoración con un otorrinolaringólogo para descartar apnea obstructiva.',
      },
      {
        pregunta: '¿Cómo se diagnostica la apnea del sueño?',
        respuesta:
          'El diagnóstico parte de una historia clínica detallada y una exploración de nariz y garganta para identificar el sitio de la obstrucción. Cuando es necesario, se complementa con un estudio del sueño que registra la respiración y la oxigenación durante la noche. Con esa información se define el tratamiento más adecuado para tu caso.',
      },
      {
        pregunta: '¿La uvulectomía cura la apnea del sueño?',
        respuesta:
          'La uvulectomía está indicada principalmente para el ronquido crónico y la apnea obstructiva del sueño leve, cuando la obstrucción proviene de la úvula y el paladar blando. En muchos pacientes mejora notablemente el ronquido y el paso del aire, pero los resultados dependen de cada caso. Por eso siempre se requiere una valoración previa para confirmar si es la opción indicada para ti.',
      },
      {
        pregunta: '¿Cuánto dura la cirugía de uvulectomía y su recuperación?',
        respuesta:
          'Es un procedimiento breve, de entre 20 y 30 minutos, que puede realizarse con anestesia local o general. La recuperación habitual es de 5 a 10 días, durante los cuales se recomienda dieta blanda y seguir las indicaciones del doctor. En tu valoración se te explican los cuidados específicos para tu caso.',
      },
      {
        pregunta: '¿Qué pasa si no atiendo mi apnea del sueño?',
        respuesta:
          'La apnea no tratada deteriora la calidad del sueño y puede asociarse con el tiempo a presión arterial elevada, problemas cardiovasculares y mayor riesgo de accidentes por somnolencia. Atenderla a tiempo ayuda a proteger tu salud y a recuperar un descanso reparador.',
      },
    ],
    ctaTexto:
      'Si roncas intensamente, te han observado pausas al respirar o despiertas cansado todos los días, no lo dejes pasar. Agenda una valoración con el Dr. Roberto Herrera, otorrinolaringólogo en el centro de Tlaxcala, y conoce la causa de tu problema y las opciones de tratamiento para tu caso. Escríbenos por WhatsApp y con gusto te atendemos.',
    whatsappMensaje:
      'Hola Dr. Herrera, me gustaría agendar una valoración por ronquido y posible apnea del sueño.',
  },
  {
    slug: 'otitis-media',
    seccion: 'enfermedades',
    seccionLabel: 'Enfermedades',
    tipo: 'padecimiento',
    nombre: 'Otitis Media',
    titleTag: 'Otitis Media en Tlaxcala | Dr. Roberto Herrera',
    metaDescription:
      'Otitis media aguda y crónica en niños y adultos: síntomas, complicaciones y tratamiento. Atención del Dr. Roberto Herrera, otorrinolaringólogo en Tlaxcala.',
    h1: 'Otitis media: infección del oído medio en niños y adultos',
    intro:
      'La otitis media es una de las causas más frecuentes de dolor de oído, sobre todo en niños pequeños, aunque también afecta a adultos. Se trata de una infección o inflamación del oído medio, el espacio que se encuentra detrás del tímpano, generalmente causada por bacterias o virus. En nuestro consultorio en el centro de Tlaxcala, el Dr. Roberto Herrera, otorrinolaringólogo, atiende con frecuencia tanto cuadros agudos —esas infecciones de oído súbitas y dolorosas— como casos crónicos que llevan meses con molestias.\n\nSi tú o tu hijo presentan dolor de oído, fiebre o salida de líquido por el oído, es importante no dejarlo pasar: una otitis media que no se atiende a tiempo puede complicarse y afectar la audición. Aquí te explicamos qué es, cómo reconocerla y cómo se trata.',
    secciones: [
      {
        h2: '¿Qué es la otitis media y qué tipos existen?',
        parrafos: [
          'El oído medio es una pequeña cavidad detrás del tímpano que normalmente está llena de aire y se ventila a través de la trompa de Eustaquio, un conducto que lo conecta con la parte posterior de la nariz. Cuando ese conducto se inflama u obstruye —por una gripa, una rinitis o, en los niños, por el crecimiento de las adenoides— se acumula líquido en el oído medio y puede infectarse.',
          'La otitis media aguda es una infección súbita del oído medio, frecuente en niños, generalmente causada por bacterias o virus; suele aparecer después de un resfriado y provoca dolor intenso. La otitis media crónica, en cambio, es una inflamación persistente del oído medio con secreción recurrente y posible daño en el tímpano, que puede desarrollarse cuando las infecciones se repiten o no se tratan de forma adecuada.',
        ],
      },
      {
        h2: 'Síntomas de la otitis media en niños y adultos',
        parrafos: [
          'Los síntomas varían según la edad y el tipo de otitis. En los niños pequeños, que muchas veces no pueden explicar lo que sienten, hay señales indirectas a las que conviene estar atentos:',
        ],
        lista: [
          'Dolor intenso de oído (en bebés: llanto, irritabilidad y llevarse la mano al oído)',
          'Fiebre',
          'Secreción o salida de líquido por el oído',
          'Sensación de oído tapado o de presión',
          'Disminución de la audición (el niño sube el volumen de la televisión o no responde cuando le hablan)',
          'En casos crónicos: supuración constante y pérdida progresiva de audición',
        ],
      },
      {
        h2: '¿Qué pasa si no se trata una otitis media?',
        parrafos: [
          'Aunque algunos cuadros leves mejoran con el tratamiento adecuado en pocos días, dejar pasar una otitis media o automedicarse de manera repetida puede traer consecuencias. Entre los riesgos de una otitis no tratada o mal tratada se encuentran:',
        ],
        lista: [
          'Perforación del tímpano por la presión del líquido infectado',
          'Evolución a otitis media crónica, con supuración recurrente',
          'Pérdida de audición, que en los niños puede afectar el desarrollo del lenguaje y el rendimiento escolar',
          'Otitis recurrente, es decir, infecciones de oído que regresan una y otra vez',
          'Extensión de la infección a estructuras cercanas, una complicación poco frecuente pero seria',
        ],
      },
      {
        h2: 'Tratamiento de la otitis media',
        parrafos: [
          'El tratamiento depende del tipo de otitis, la edad del paciente y la causa de fondo, por lo que siempre parte de una exploración del oído en consulta. En la otitis media aguda, el manejo suele incluir medicamentos para controlar el dolor y la fiebre y, cuando el cuadro lo amerita, antibióticos indicados por el especialista. Es importante no aplicar gotas ni remedios caseros sin revisión previa, ya que si el tímpano está perforado algunas sustancias pueden dañar el oído.',
          'En la otitis media crónica o recurrente, además de controlar la infección, se busca corregir la causa que la mantiene: puede ser necesario tratar una rinitis o sinusitis asociada, valorar las adenoides en los niños o, en casos seleccionados, recurrir a procedimientos para ventilar el oído medio o reparar el daño del tímpano. El Dr. Roberto Herrera determina la mejor opción para cada paciente después de valorar su caso de forma individual.',
        ],
      },
      {
        h2: '¿Cuándo acudir con el otorrinolaringólogo?',
        parrafos: [
          'Te recomendamos agendar una valoración si el dolor de oído dura más de uno o dos días, si hay fiebre que no cede, salida de líquido o pus por el oído, disminución de la audición, o si las infecciones de oído se repiten varias veces al año. En adultos, una sensación de oído tapado que no mejora también merece revisión.',
          'El diagnóstico oportuno es sencillo: en consulta, el otorrinolaringólogo revisa el oído con instrumentos especializados y puede identificar si hay líquido, infección o daño en el tímpano. Atender la otitis media a tiempo evita complicaciones y protege la audición, especialmente en los niños.',
        ],
      },
    ],
    faqs: [
      {
        pregunta: '¿La otitis media se quita sola?',
        respuesta:
          'Algunos cuadros leves, sobre todo de origen viral, pueden mejorar en pocos días. Sin embargo, no hay forma de saberlo sin revisar el oído, y una infección que persiste puede dañar el tímpano o volverse crónica. Por eso lo recomendable es acudir a valoración y no esperar a que el dolor desaparezca por sí solo.',
      },
      {
        pregunta: '¿Por qué a mi hijo le dan infecciones de oído tan seguido?',
        respuesta:
          'La otitis recurrente en niños suele estar relacionada con la anatomía de la trompa de Eustaquio, que a esa edad es más corta y horizontal, y con factores como gripas frecuentes o crecimiento de las adenoides. Identificar y tratar la causa de fondo es clave para romper el ciclo de infecciones. En consulta se valora cada caso para definir el manejo adecuado.',
      },
      {
        pregunta: '¿La otitis media puede causar pérdida de audición permanente?',
        respuesta:
          'Durante la infección es normal escuchar menos por el líquido acumulado, y esa disminución suele recuperarse con el tratamiento. Sin embargo, una otitis media crónica o mal tratada puede provocar daño en el tímpano y pérdida progresiva de audición. Atenderla a tiempo es la mejor forma de proteger el oído.',
      },
      {
        pregunta: '¿Puedo ponerme gotas o remedios caseros para el dolor de oído?',
        respuesta:
          'No es recomendable aplicar gotas, aceites ni remedios caseros sin que un médico revise antes el oído. Si el tímpano está perforado, algunas sustancias pueden entrar al oído medio y causar más daño. Lo más seguro es acudir a consulta para recibir el tratamiento indicado para tu caso.',
      },
      {
        pregunta: '¿Dónde puedo atender una otitis media en Tlaxcala?',
        respuesta:
          'El Dr. Roberto Herrera, otorrinolaringólogo, atiende otitis media aguda y crónica en niños y adultos en su consultorio ubicado en G. Valle 18, en el centro de Tlaxcala. Puedes agendar tu cita por WhatsApp, llamada telefónica o mediante el formulario de contacto del sitio.',
      },
    ],
    ctaTexto:
      '¿Tú o tu hijo tienen dolor de oído, fiebre o salida de líquido por el oído? No dejes avanzar la infección. Agenda una valoración con el Dr. Roberto Herrera, otorrinolaringólogo en Tlaxcala, y recibe un diagnóstico preciso y el tratamiento adecuado para tu caso.',
    whatsappMensaje:
      'Hola, Dr. Herrera. Me gustaría agendar una valoración por otitis media (dolor o infección de oído).',
  },
];
