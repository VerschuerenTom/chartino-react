import { DomainLinker } from "chartino";
import { useEffect, useState } from "react";

export function useDomainHistoryStatus(domainLinker: DomainLinker) {
    const [hasHistory, setHasHistory] = useState(false);
    const [hasFutures, setHasFutures] = useState(false)

    const subscriber = () => {
      setHasHistory(domainLinker.hasDomainHistory())
      setHasFutures(domainLinker.hasDomainFutures())
    }

    useEffect(() => {
      domainLinker.subscribe(subscriber)
      return () => {
        domainLinker.unsubscribe(subscriber)
      };
    }, []);
    return {hasHistory,hasFutures};
  }