import { useState, useEffect } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import {
  AddBar,
  SearchBar,
  FolderLists,
  CardSection,
  NoFolderLink,
} from "components";
import { getFolderLists, getLinks } from "utils/api";
import * as Styled from "./StyledFolderPage";

const FolderPage = () => {
  const { folderId } = useParams();
  const [search, setSearch] = useState("");
  const [folderListsData, setFolderListsData] = useState({
    data: [],
  });
  const [linksData, setLinksData] = useState({
    data: [],
  });

  const { setSticky, isLogin } = useOutletContext();

  const handleFolderLists = async (id) => {
    try {
      const [folderLists, links] = await Promise.all([
        getFolderLists(),
        getLinks(id),
      ]);
      const { data: folderData } = folderLists;
      const { data: LinkData } = links;
      setFolderListsData((prevData) => ({
        ...prevData,
        data: folderData,
      }));
      setLinksData((prevData) => ({
        ...prevData,
        data: LinkData,
      }));
    } catch (err) {
      console.log(err);
    } finally {
      setSearch("");
    }
  };

  const handleSearchSubmit = (value) => {
    if (!value) return;
    const filteredLinks = linksData.data.filter((item) =>
      item["description"]?.includes(value)
    );
    setLinksData((prevData) => ({
      ...prevData,
      data: filteredLinks,
    }));
  };

  useEffect(() => {
    setSticky("static");
    if (isLogin) {
      handleFolderLists(folderId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [folderId, isLogin]);

  useEffect(() => {
    handleSearchSubmit(search);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  return (
    <>
      <Styled.Header>
        <AddBar />
      </Styled.Header>
      <Styled.Article>
        <SearchBar onSubmit={setSearch} />
        <FolderLists
          linksData={linksData.data}
          folderData={folderListsData.data}
          id={folderId}
        />
        {linksData.data.length === 0 ? (
          <NoFolderLink />
        ) : (
          <CardSection data={linksData.data} />
        )}
      </Styled.Article>
    </>
  );
};

export default FolderPage;
