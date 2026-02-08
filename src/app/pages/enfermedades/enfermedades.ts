import { Component, OnInit } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';

interface Enfermedad {
  titulo: string;
  descripcion: string;
  sintomas: string[];
  imagen: string;
}

@Component({
  selector: 'app-enfermedades',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './enfermedades.html',
  styles: ``,
})
export class Enfermedades implements OnInit {
  // CONTROL DE VISIBILIDAD
  // Empezamos mostrando solo 4 tarjetas de oído (la primera fila en Desktop)
  cantidadOidoVisible = 4;

  constructor(
    private title: Title,
    private meta: Meta,
  ) {}

  ngOnInit(): void {
    // 1. Título para Google
    this.title.setTitle('Enfermedades de Oído, Nariz y Garganta | Dr. Roberto Herrera');

    // 2. Descripción para Google
    this.meta.updateTag({
      name: 'description',
      content:
        'Guía completa de síntomas y tratamientos para otitis, sinusitis, rinitis y más. Consulta con el Dr. Roberto Herrera en Tlaxcala.',
    });

    // 3. Open Graph (WhatsApp/Facebook)
    this.meta.updateTag({
      property: 'og:title',
      content: '¿Dolor de oído o garganta? Conoce los síntomas.',
    });
    this.meta.updateTag({
      property: 'og:description',
      content: 'Guía médica de enfermedades comunes y cuándo acudir al especialista.',
    });
    this.meta.updateTag({
      property: 'og:image',
      content: 'https://otorrinotlaxcala.com/assets/images/enfermedades/desviacion.webp',
    });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://otorrinotlaxcala.com/enfermedades',
    });
  }

  // FUNCIÓN PARA CARGAR MÁS
  cargarMasOido() {
    this.cantidadOidoVisible = this.enfermedadesOido.length; // Muestra todas
  }

  // DATOS
  enfermedadesOido: Enfermedad[] = [
    {
      titulo: 'Cerilla (Tapón de Cerumen)',
      descripcion:
        'Acumulación excesiva de cera en el canal auditivo que puede causar molestias y pérdida temporal de la audición.',
      sintomas: [
        'Sensación de oído tapado',
        'Pérdida parcial de audición',
        'Picazón en el oído',
        'Zumbido ocasional',
      ],
      imagen: 'assets/images/enfermedades/cerilla.webp',
    },
    {
      titulo: 'Pérdida de la audición',
      descripcion:
        'Disminución parcial o total de la capacidad de escuchar sonidos, que puede ser súbita o progresiva.',
      sintomas: [
        'Dificultad para escuchar conversaciones',
        'Necesidad de subir el volumen',
        'Confusión en ambientes ruidosos',
      ],
      imagen: 'assets/images/enfermedades/perdida-audicion.webp',
    },
    {
      titulo: 'Presbiacusia',
      descripcion: 'Pérdida auditiva asociada al envejecimiento, más frecuente en sonidos agudos.',
      sintomas: [
        'Dificultad para oír voces agudas',
        'Problemas para entender en lugares ruidosos',
        'Necesidad de pedir que repitan',
      ],
      imagen: 'assets/images/enfermedades/presbiacusia.webp',
    },
    {
      titulo: 'Cuerpo extraño',
      descripcion:
        'Objeto atrapado en el oído, común en niños, que puede causar dolor o pérdida de audición.',
      sintomas: ['Dolor de oído', 'Molestias o irritación', 'Disminución auditiva unilateral'],
      imagen: 'assets/images/enfermedades/cuerpo.webp',
    },
    {
      titulo: 'Otitis media aguda',
      descripcion:
        'Infección súbita del oído medio, frecuente en niños, generalmente causada por bacterias o virus.',
      sintomas: ['Dolor intenso de oído', 'Fiebre', 'Irritabilidad', 'Secreción del oído'],
      imagen: 'assets/images/enfermedades/otitis-media-aguda.webp',
    },
    {
      titulo: 'Otitis media crónica',
      descripcion:
        'Inflamación persistente del oído medio con secreción recurrente y posible daño en el tímpano.',
      sintomas: [
        'Supuración constante',
        'Pérdida progresiva de audición',
        'Sensación de presión en el oído',
      ],
      imagen: 'assets/images/enfermedades/otitis-media-cronica.webp',
    },
    {
      titulo: 'Otitis del nadador',
      descripcion:
        'Infección del canal auditivo externo causada por humedad retenida tras nadar o bañarse.',
      sintomas: ['Dolor al mover la oreja', 'Picazón intensa', 'Secreción acuosa'],
      imagen: 'assets/images/enfermedades/otitis-nadador.webp',
    },
    {
      titulo: 'Hipoacusia súbita',
      descripcion:
        'Pérdida brusca de la audición en uno o ambos oídos, generalmente en pocas horas o días.',
      sintomas: [
        'Pérdida repentina de audición',
        'Zumbido',
        'Sensación de oído tapado',
        'Vértigo ocasional',
      ],
      imagen: 'assets/images/enfermedades/hipoacusia.webp',
    },
    {
      titulo: 'Otoesclerosis',
      descripcion:
        'Crecimiento anormal del hueso en el oído medio que afecta la movilidad de los huesecillos.',
      sintomas: [
        'Pérdida progresiva de audición',
        'Zumbido constante',
        'Dificultad para oír graves o agudos',
      ],
      imagen: 'assets/images/enfermedades/otoesclerosis.webp',
    },
    {
      titulo: 'Ototubaritis',
      descripcion:
        'Inflamación de la trompa de Eustaquio, que comunica el oído medio con la nariz y garganta.',
      sintomas: ['Presión en el oído', 'Pérdida de audición leve', 'Dolor al tragar o bostezar'],
      imagen: 'assets/images/enfermedades/ototubaritis.webp',
    },
    {
      titulo: 'Vértigo postural paroxístico benigno',
      descripcion:
        'Trastorno del oído interno que provoca mareos intensos al mover la cabeza en ciertas posiciones.',
      sintomas: ['Mareos breves pero intensos', 'Náuseas', 'Pérdida de equilibrio'],
      imagen: 'assets/images/enfermedades/vertigo.webp',
    },
    {
      titulo: 'Síndrome de Ménière',
      descripcion: 'Trastorno crónico del oído interno que afecta el equilibrio y la audición.',
      sintomas: [
        'Episodios de vértigo',
        'Zumbido (tinnitus)',
        'Pérdida progresiva de audición',
        'Presión en el oído',
      ],
      imagen: 'assets/images/enfermedades/sindrome.webp',
    },
    {
      titulo: 'Disfunción temporomandibular (síndrome de Costen)',
      descripcion:
        'Problema en la articulación de la mandíbula que puede reflejarse en dolor de oído.',
      sintomas: [
        'Dolor en la mandíbula y oído',
        'Chasquido al abrir la boca',
        'Cefaleas frecuentes',
      ],
      imagen: 'assets/images/enfermedades/disfuncion.webp',
    },
    {
      titulo: 'Perforación de la membrana timpánica',
      descripcion:
        'Ruptura del tímpano por infecciones, traumatismos o cambios bruscos de presión.',
      sintomas: ['Dolor agudo de oído', 'Supuración', 'Pérdida de audición', 'Zumbido'],
      imagen: 'assets/images/enfermedades/perforacion.webp',
    },
  ];

  enfermedadesGarganta: Enfermedad[] = [
    {
      titulo: 'Faringitis crónica',
      descripcion:
        'Inflamación persistente de la faringe causada por infecciones recurrentes, irritantes o alergias.',
      sintomas: [
        'Dolor de garganta frecuente',
        'Sequedad en la garganta',
        'Tos crónica',
        'Irritación constante',
      ],
      imagen: 'assets/images/enfermedades/faringitis.webp',
    },
    {
      titulo: 'Adenoides',
      descripcion:
        'Crecimiento excesivo de las adenoides que puede obstruir las vías respiratorias y afectar la audición.',
      sintomas: [
        'Dificultad para respirar por la nariz',
        'Ronquidos',
        'Otitis recurrente',
        'Hablar con voz nasal',
      ],
      imagen: 'assets/images/enfermedades/adenoides.webp',
    },
    {
      titulo: 'Tumores amigdalinos',
      descripcion: 'Crecimientos anormales en las amígdalas, que pueden ser benignos o malignos.',
      sintomas: [
        'Masa visible en la amígdala',
        'Dolor de garganta unilateral',
        'Dificultad para tragar',
        'Ganglios inflamados',
      ],
      imagen: 'assets/images/enfermedades/tumores.webp',
    },
    {
      titulo: 'Tonsilolitos (cálculos amigdalinos)',
      descripcion:
        'Acumulación de restos de comida, bacterias y moco en las amígdalas que se calcifican.',
      sintomas: [
        'Mal aliento persistente',
        'Sensación de cuerpo extraño',
        'Dolor leve al tragar',
        'Puntos blancos en las amígdalas',
      ],
      imagen: 'assets/images/enfermedades/calculos.webp',
    },
    {
      titulo: 'Retiro de cuerpo extraño',
      descripcion:
        'Situación en la que un objeto queda atrapado en la garganta, generando molestias o peligro de obstrucción.',
      sintomas: [
        'Sensación de cuerpo atrapado',
        'Dificultad para tragar',
        'Dolor localizado',
        'Tos persistente',
      ],
      imagen: 'assets/images/enfermedades/retiro.webp',
    },
    {
      titulo: 'Apnea del sueño',
      descripcion:
        'Trastorno en el que la respiración se interrumpe repetidamente durante el sueño debido a obstrucción en la garganta.',
      sintomas: [
        'Ronquidos intensos',
        'Pausas en la respiración',
        'Somnolencia diurna',
        'Cansancio al despertar',
      ],
      imagen: 'assets/images/enfermedades/apnea.webp',
    },
  ];

  enfermedadesNariz: Enfermedad[] = [
    {
      titulo: 'Desviación septal o del tabique nasal',
      descripcion:
        'Alteración en la alineación del tabique nasal que puede dificultar la respiración y favorecer infecciones.',
      sintomas: [
        'Dificultad para respirar por la nariz',
        'Congestión nasal crónica',
        'Ronquidos',
        'Infecciones sinusales recurrentes',
      ],
      imagen: 'assets/images/enfermedades/desviacion.webp',
    },
    {
      titulo: 'Epistaxis (sangrado nasal)',
      descripcion:
        'Sangrado proveniente de la nariz causado por traumatismos, sequedad o problemas vasculares.',
      sintomas: [
        'Sangrado por una o ambas fosas nasales',
        'Coágulos de sangre',
        'Presión en la nariz',
        'Debilidad si el sangrado es abundante',
      ],
      imagen: 'assets/images/enfermedades/sangrado.webp',
    },
    {
      titulo: 'Retiro de cuerpo extraño',
      descripcion:
        'Ocurre cuando un objeto queda alojado en la nariz, afectando la respiración y provocando molestias.',
      sintomas: [
        'Obstrucción nasal unilateral',
        'Secreción con mal olor',
        'Dolor o incomodidad',
        'Dificultad para respirar por un lado',
      ],
      imagen: 'assets/images/enfermedades/retiro.webp',
    },
    {
      titulo: 'Rinitis (crónicas y alérgicas)',
      descripcion:
        'Inflamación de la mucosa nasal provocada por alergias, infecciones o irritantes ambientales.',
      sintomas: [
        'Congestión nasal',
        'Estornudos frecuentes',
        'Picazón en nariz y garganta',
        'Secreción nasal acuosa',
      ],
      imagen: 'assets/images/enfermedades/rinitis.webp',
    },
    {
      titulo: 'Sinusitis',
      descripcion:
        'Infección o inflamación de los senos paranasales que dificulta la respiración y causa dolor facial.',
      sintomas: [
        'Dolor en la cara o frente',
        'Secreción nasal espesa',
        'Fiebre',
        'Congestión persistente',
      ],
      imagen: 'assets/images/enfermedades/sinusitis.webp',
    },
    {
      titulo: 'Tumores nasales',
      descripcion:
        'Crecimientos anormales en la cavidad nasal o senos paranasales, que pueden ser benignos o malignos.',
      sintomas: [
        'Obstrucción nasal progresiva',
        'Sangrado nasal frecuente',
        'Dolor facial',
        'Pérdida del olfato',
      ],
      imagen: 'assets/images/enfermedades/tumores.webp',
    },
    {
      titulo: 'Pólipos nasales',
      descripcion:
        'Crecimientos benignos en el revestimiento de la nariz o los senos paranasales que obstruyen la respiración.',
      sintomas: [
        'Congestión nasal crónica',
        'Ronquidos',
        'Pérdida del olfato',
        'Secreción nasal persistente',
      ],
      imagen: 'assets/images/enfermedades/polipos.webp',
    },
  ];

  enfermedadesLaringe: Enfermedad[] = [
    {
      titulo: 'Pérdida de la voz',
      descripcion:
        'Disfonía o afonía causada por inflamación, sobreuso de las cuerdas vocales o infecciones de la laringe.',
      sintomas: [
        'Ronquera',
        'Dificultad para hablar',
        'Irritación en la garganta',
        'Voz débil o ausente',
      ],
      imagen: 'assets/images/enfermedades/perdida.webp',
    },
    {
      titulo: 'Pólipos y nódulos de cuerdas bucales',
      descripcion:
        'Crecimientos benignos en las cuerdas vocales asociados al sobreuso de la voz o irritación crónica.',
      sintomas: [
        'Voz ronca o áspera',
        'Dificultad para alcanzar tonos altos',
        'Dolor al hablar',
        'Pérdida parcial de la voz',
      ],
      imagen: 'assets/images/enfermedades/nodulos.webp',
    },
    {
      titulo: 'Cáncer de laringe',
      descripcion:
        'Enfermedad maligna que afecta las cuerdas vocales o la mucosa laríngea, relacionada con el tabaquismo y alcoholismo.',
      sintomas: [
        'Ronquera persistente',
        'Dificultad para tragar',
        'Dolor de garganta crónico',
        'Bultos en el cuello',
      ],
      imagen: 'assets/images/enfermedades/cancer.webp',
    },
  ];

  enfermedadesCuello: Enfermedad[] = [
    {
      titulo: 'Abscesos de cuello',
      descripcion: 'Acumulación de pus en los tejidos del cuello debido a infecciones bacterianas.',
      sintomas: [
        'Dolor e inflamación en el cuello',
        'Fiebre',
        'Dificultad para mover el cuello',
        'Dificultad para tragar',
      ],
      imagen: 'assets/images/enfermedades/abscesos.webp',
    },
    {
      titulo: 'Tumores de cuello',
      descripcion:
        'Crecimientos anormales que pueden ser benignos o malignos, afectando ganglios linfáticos u otras estructuras.',
      sintomas: [
        'Bulto visible en el cuello',
        'Pérdida de peso inexplicable',
        'Dolor persistente',
        'Alteraciones en la voz',
      ],
      imagen: 'assets/images/enfermedades/cuello.webp',
    },
    {
      titulo: 'Parotiditis',
      descripcion:
        'Inflamación de la glándula parótida causada por infección viral (como paperas) o bacteriana.',
      sintomas: [
        'Hinchazón dolorosa en la zona de la mandíbula',
        'Fiebre',
        'Dolor al masticar',
        'Boca seca',
      ],
      imagen: 'assets/images/enfermedades/parotiditis.webp',
    },
  ];
}
