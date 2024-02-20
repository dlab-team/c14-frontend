import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  XIcon,
  LinkedinIcon,
  WhatsappIcon,
  WhatsappShareButton,
} from 'react-share';
import { FaFacebook, FaInstagram, FaRegCopy } from 'react-icons/fa';
import { Toaster, toast } from 'sonner';
import useFormStore from '@/store/useFormStore';

function ShareModal({ isOpen, onClose }) {
  const totalPerceptionGap = useFormStore.getState().totalPerceptionGap;

  const url = 'https://laboratoriocivico.vercel.app/';
  if (!isOpen) {
    return null;
  }

  const copy = () => {
    navigator.clipboard.writeText(url);
    toast.success('Link copiado al portapapeles');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center mr-20">
      <div className="w-[350px] max-w-xl mx-auto my-6 shadow-xl border border-slate-300 rounded-lg">
        <div className="relative flex flex-col bg-white rounded-lg pl-3">
          <div className="p-4">
            <div className="flex flex-row justify-between">
              <h2 className="text-sm font-bold mb-2 mt-2">Compartir en:</h2>
              <button
                type="button"
                className="text-black border-black w-fit h-fit items-center text-sm"
                onClick={onClose}
              >
                x
              </button>
            </div>
            <div className="flex flex-row justify-between mb-8 mt-2 h-12">
              <div className="">
                <FacebookShareButton url={url} hashtag={'#MiPolarización' + totalPerceptionGap}>
                  <FaFacebook className="w-10 h-10 mx-auto" />
                  <span className="font-semibold text-xs">Facebook</span>
                </FacebookShareButton>
              </div>
              <div className="hidden">
                <FaInstagram className="w-10 h-10 mx-auto" />
                <span className="font-semibold text-xs">Instagram</span>
              </div>
              <div className="">
                <WhatsappShareButton
                  url={url}
                  title={'Mi polarización subjetiva es de: ' + totalPerceptionGap + '%'}
                >
                  <WhatsappIcon
                    className="w-10 h-10 mx-auto"
                    round={true}
                    bgStyle={{ fill: 'black' }}
                  />
                  <span className="font-semibold text-xs">Whatsapp</span>
                </WhatsappShareButton>
              </div>
              <div className="">
                <TwitterShareButton
                  url={url}
                  title={'Mi polarización subjetiva es de: ' + totalPerceptionGap + '%'}
                  hashtags={['3xi', 'Criteria']}
                >
                  <XIcon className="w-10 h-10 mx-auto" round={true} />
                  <span className="font-semibold text-xs">X</span>
                </TwitterShareButton>
              </div>
              <div className="">
                <LinkedinShareButton
                  url={url}
                  title="Laboratorio Cívico"
                  summary="La importancia de las brechas de percepción"
                >
                  <LinkedinIcon
                    className="w-10 h-10 mx-auto"
                    round={true}
                    bgStyle={{ fill: 'black' }}
                  />
                  <span className="font-semibold text-xs">LinkedIn</span>
                </LinkedinShareButton>
              </div>
            </div>
            <h2 className="text-xs font-bold mb-1">Copiar enlace</h2>
            <div className="border-collapse flex flex-row">
              <input
                type="text"
                placeholder="https://laboratoriocivico.vercel.app/"
                className="text-slate-500 pl-2 bg-white rounded-l-lg border border-slate-300 w-full h-10 items-center text-sm overflow"
                defaultValue={url}
              />
              <button
                type="button"
                className="text-black bg-white rounded-r-lg border border-slate-300 w-16 h-10 font-semibold items-center text-xl"
                onClick={copy}
              >
                <FaRegCopy className="w-5 h-5 items-center mx-auto opacity-70" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <Toaster position="top-center" />
    </div>
  );
}

export default ShareModal;
