const CodeEditor = () => {
    // ... 기존 코드 ...
  
    const createShareableLink = () => {
      const encodedHtml = encodeURIComponent(htmlContents);
      const encodedJs = encodeURIComponent(jsContents);
      const shareableUrl = `${window.location.origin}/playground?id=${safeId}&html=${encodedHtml}&javascript=${encodedJs}`;
  
      // 클립보드에 URL 복사
      navigator.clipboard.writeText(shareableUrl).then(() => {
        alert("공유 링크가 클립보드에 복사되었습니다!");
      });
    };
  
    return (
      <>
        {/* 다른 UI 구성 요소들 ... */}
        <button onClick={createShareableLink}>공유 링크 생성</button>
        {/* 에디터 및 나머지 UI ... */}
      </>
    );
  };
  

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const html = params.get("html");
    const javascript = params.get("javascript");
  
    if (html) {
      setHtmlContents(decodeURIComponent(html));
    }
    if (javascript) {
      setJsContents(decodeURIComponent(javascript));
    }
  }, []);
  