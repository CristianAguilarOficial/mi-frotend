import ParticlesBackground from '../components/ParticlesBackground';
import LogoDiseño from '../img/LogoDiseañoTatiana.svg';

function QuienesSomos() {
  return (
    <section className="relative min-h-screen  pt-20 overflow-hidden">
      <div className="relative z-10 flex flex-col items-center justify-start px-4 sm:px-6 py-10">
        <div className="max-w-3xl text-center text-white">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-500 mb-6 leading-tight">
            ¿Quiénes Somos?
          </h2>

          <div className="flex justify-center mb-6">
            <img
              className="w-24 sm:w-40 md:w-52 object-contain"
              src={LogoDiseño}
              alt="Logo Diseñado por diseñadora Tatiana"
            />
          </div>

          <p className="text-base sm:text-lg text-zinc-300 mb-4">
            <span className="font-semibold">BasicWeb</span> es más que un
            nombre: es una visión. Nacimos con la misión de crear proyectos web
            sencillos pero poderosos, útiles para el día a día y accesibles para
            todos. Somos una organización joven, impulsada por la pasión por el
            desarrollo web y el deseo de aprender construyendo.
          </p>

          <p className="text-base sm:text-lg text-zinc-300 mb-4">
            Nuestro enfoque es claro: hacer lo básico con excelencia. No
            buscamos complicar lo simple, sino hacer que lo simple funcione de
            forma inteligente y contemporánea. Desde aplicaciones de tareas
            hasta herramientas personales, nuestro objetivo es ofrecer
            soluciones web que realmente ayuden.
          </p>

          <p className="text-base sm:text-lg text-zinc-300">
            El primer paso en este camino es{' '}
            <span className="text-blue-400 font-medium">Task Manager</span>, una
            app para organizar ideas, notas y actividades diarias. Pero esto es
            solo el comienzo. En <span className="font-semibold">BasicWeb</span>
            , cada proyecto es una oportunidad para crecer, innovar y seguir
            aprendiendo.
          </p>
        </div>
      </div>
    </section>
  );
}

export default QuienesSomos;
