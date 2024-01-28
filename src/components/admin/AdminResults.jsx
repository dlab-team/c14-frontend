import React from 'react';

const AdminResults = () => {
  return (
    <div>
      <div className="relative w-[100%] h-[106px] px-[20%] mx-auto sm:w-full md:w-[75%] lg:w-[75%] xl:w-[75%] sm:ml-0 md:ml-40 lg:ml-40 xl:ml-40 -mt-11 py-8 bg-white rounded-lg border border-stone-300 align-center items-center gap-8 inline-flex z-60">
        <div class="h-[69px] flex-col justify-start items-center gap-1 inline-flex">
          <div class="text-purple-700 text-[40px] font-medium font-['Roboto'] leading-[43.60px]">
            45
          </div>
          <div class="text-zinc-600 text-xs font-normal font-['Roboto'] leading-[13.08px]">
            Visitas
          </div>
        </div>
        <div class="px-8 border-l-2 border-r-2 border-purple-700 flex-col justify-start items-center gap-1 inline-flex">
          <div class="text-purple-700 text-[40px] font-medium font-['Roboto'] leading-[43.60px]">
            30
          </div>
          <div class="w-[67px] text-center text-zinc-600 text-xs font-normal font-['Roboto'] leading-[13.08px]">
            Encuestas finalizadas
          </div>
        </div>
        <div class="flex-col justify-start items-center gap-1 inline-flex">
          <div class="text-purple-700 text-[40px] font-medium font-['Roboto'] leading-[43.60px]">
            5:30
          </div>
          <div class="w-[67px] text-center text-zinc-600 text-xs font-normal font-['Roboto'] leading-[13.08px]">
            Tiempo terminado
          </div>
        </div>
      </div>

      <div class="w-[100%] h-[242px] px-[29px] mt-2 mx-auto sm:w-full md:w-[75%] lg:w-[75%] xl:w-[75%]sm:ml-0 md:ml-40 lg:ml-40 xl:ml-40 pt-6 pb-10 bg-white rounded-lg border border-stone-300 flex-col justify-center items-center gap-[42px] inline-flex">
        <div class="self-stretch h-3.5 text-black text-sm font-medium font-['Roboto']">
          Tendencia Política
        </div>
        <div class="self-stretch h-[133px] flex-col justify-start items-center gap-6 flex">
          <div class="w-[328px] justify-start items-start gap-6 inline-flex">
            <div class="justify-start items-start gap-2 flex">
              <div class="w-[13px] h-[13px] bg-lime-400 rounded-full"></div>
              <div class="text-center text-zinc-600 text-xs font-normal font-['Roboto']">
                Izquierda
              </div>
            </div>
            <div class="justify-start items-start gap-[30px] flex">
              <div class="justify-start items-start gap-2 flex">
                <div class="w-[13px] h-[13px] bg-orange-400 rounded-full"></div>
                <div class="text-center text-zinc-600 text-xs font-normal font-['Roboto']">
                  Derecha
                </div>
              </div>
              <div class="justify-start items-start gap-2 flex">
                <div class="w-[13px] h-[13px] bg-red-500 rounded-full"></div>
                <div class="text-center text-zinc-600 text-xs font-normal font-['Roboto']">
                  Independiente
                </div>
              </div>
            </div>
            <div class="justify-start items-start gap-2 flex">
              <div class="w-[13px] h-[13px] bg-purple-700 rounded-full"></div>
              <div class="text-center text-zinc-600 text-xs font-normal font-['Roboto']">
                Centro
              </div>
            </div>
          </div>
          <div class="self-stretch h-[65px] flex-col justify-center items-center gap-[9px] flex">
            <div class="w-[329px] shadow justify-center items-center inline-flex relative">
              <div class="w-[4%] h-[42px] bg-lime-400 rounded-tl-lg rounded-bl-lg relative">
                <div class="absolute top-11 w-full text-center text-black text-xs font-normal font-['Roboto']">
                  4
                </div>
              </div>
              <div class="w-[10%] h-[42px] bg-orange-400 relative">
                <div class="absolute top-11 w-full text-center text-black text-xs font-normal font-['Roboto']">
                  10
                </div>
              </div>
              <div class="w-[28%] h-[42px] bg-red-500 relative">
                <div class="absolute top-11 w-full text-center text-black text-xs font-normal font-['Roboto']">
                  28
                </div>
              </div>
              <div class="w-[58%] h-[42px] bg-purple-700 rounded-tr-lg rounded-br-lg relative">
                <div class="absolute top-11 w-full text-center text-black text-xs font-normal font-['Roboto']">
                  58
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="w-[100%] h-[319px] px-[29px] mt-2 mx-auto sm:w-full md:w-[75%] lg:w-[75%] xl:w-[75%]sm:ml-0 md:ml-40 lg:ml-40 xl:ml-40 pt-6 pb-10 bg-white rounded-lg border border-stone-300 flex-col justify-center items-center gap-[42px] inline-flex">
        <div class="self-stretch h-3.5 text-black text-sm font-medium font-['Roboto']">
          Tendencia Social
        </div>
        <div class="h-[37px] px-5 bg-white rounded-lg border border-stone-300 justify-center items-center gap-4 inline-flex">
          <select id="opcionTendenciaSocial" name="opcionTendenciaSocial">
            <option value="encuestasRealizadas">Encuestas Realizadas</option>
          </select>
        </div>
        <div class="self-stretch h-[133px] flex-col justify-start items-center gap-6 flex">
          <div class="w-[328px] justify-start items-start gap-6 inline-flex">
            <div class="justify-start items-start gap-2 flex">
              <div class="w-[13px] h-[13px] bg-lime-400 rounded-full"></div>
              <div class="text-center text-zinc-600 text-xs font-normal font-['Roboto']">
                Izquierda
              </div>
            </div>
            <div class="justify-start items-start gap-[30px] flex">
              <div class="justify-start items-start gap-2 flex">
                <div class="w-[13px] h-[13px] bg-orange-400 rounded-full"></div>
                <div class="text-center text-zinc-600 text-xs font-normal font-['Roboto']">
                  Derecha
                </div>
              </div>
              <div class="justify-start items-start gap-2 flex">
                <div class="w-[13px] h-[13px] bg-red-500 rounded-full"></div>
                <div class="text-center text-zinc-600 text-xs font-normal font-['Roboto']">
                  Independiente
                </div>
              </div>
            </div>
            <div class="justify-start items-start gap-2 flex">
              <div class="w-[13px] h-[13px] bg-purple-700 rounded-full"></div>
              <div class="text-center text-zinc-600 text-xs font-normal font-['Roboto']">
                Centro
              </div>
            </div>
          </div>
          <div class="self-stretch h-[65px] flex-col justify-center items-center gap-[9px] flex">
            <div class="w-[329px] shadow justify-center items-center inline-flex relative">
              <div class="w-[4%] h-[42px] bg-lime-400 rounded-tl-lg rounded-bl-lg relative">
                <div class="absolute top-11 w-full text-center text-black text-xs font-normal font-['Roboto']">
                  4
                </div>
              </div>
              <div class="w-[10%] h-[42px] bg-orange-400 relative">
                <div class="absolute top-11 w-full text-center text-black text-xs font-normal font-['Roboto']">
                  10
                </div>
              </div>
              <div class="w-[28%] h-[42px] bg-red-500 relative">
                <div class="absolute top-11 w-full text-center text-black text-xs font-normal font-['Roboto']">
                  28
                </div>
              </div>
              <div class="w-[58%] h-[42px] bg-purple-700 rounded-tr-lg rounded-br-lg relative">
                <div class="absolute top-11 w-full text-center text-black text-xs font-normal font-['Roboto']">
                  58
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminResults;
