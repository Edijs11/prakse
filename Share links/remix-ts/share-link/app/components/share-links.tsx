export default function ShareLinks() {
  const openApp = () => {
    window.location.href = `lv.mezaipasnieki.mednis://open`;
  };
  const downloadFromPlayStore = () => {
    window.location.href = `https://play.google.com/store/search?q=mednis&c=apps`;
  };
  const downloadFromAppleStore = () => {
    window.location.href = `https://apps.apple.com/lv/app/mednis/id1558848389`;
  };

  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center">
        <button
          className="flex items-center space-x-4 border border-white rounded-lg p-4"
          onClick={() => openApp()}
        >
          Atvērt Mednis lietotni
        </button>
        <button
          className="mt-4 flex items-center border border-white rounded-lg p-4 mx-5"
          onClick={() => downloadFromPlayStore()}
        >
          Lejuplādēt no Google Play
        </button>
        <button
          className="mt-4 flex items-center border border-white rounded-lg p-4"
          onClick={() => downloadFromAppleStore()}
        >
          Lejuplādēt no Apple Store
        </button>
      </div>
    </div>
  );
}
