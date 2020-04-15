import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

import * as R from 'ramda';

import { getNews, getBlogPosts } from '../../modules/blog/selectors';

import { Header, Footer } from '../../components';

import { Filter, Container } from '../../ui/components';
import { Search } from '../../ui/icons';

import { Tabs, NewsPostPreview, BlogPostPreview } from './components';
import { newsPics, blogPics } from './assets';

import {
  Wrapper,
  BlogWrapper,
  BlogHeader,
  BlogContent,
  NewsWrapper,
  NewsHeaderWrapper,
  NewsHeader,
  NewsContent,
  NewsLine,
  FilterWrapper,
} from './styled';

const Blog = () => {
  const news = useSelector(getNews);
  const blogPosts = useSelector(getBlogPosts);

  const splittedNews = useMemo(() => R.splitEvery(4, news), [news]);

  return (
    <React.Fragment>
      <Container>
        <Header />
      </Container>

      <Wrapper>
        <BlogWrapper>
          <Container>
            <BlogHeader>Blog</BlogHeader>
            <BlogContent>
              {blogPosts.map(blogPost => (
                <BlogPostPreview
                  key={blogPost.id}
                  imgSrc={Object.values(blogPics)[blogPost.id - 1]}
                  {...blogPost}
                />
              ))}
            </BlogContent>
          </Container>
        </BlogWrapper>

        <Container>
          <NewsWrapper>
            <NewsHeaderWrapper>
              <NewsHeader>News</NewsHeader>
              <FilterWrapper>
                <Search />
                <Filter placeholder='City' />
                <Filter placeholder='Country' />
              </FilterWrapper>
            </NewsHeaderWrapper>

            <Tabs />

            <NewsContent>
              {splittedNews.map((newsLine, index) => (
                <NewsLine key={index}>
                  {newsLine.map(newsPost => (
                    <NewsPostPreview
                      key={newsPost.id}
                      imgSrc={Object.values(newsPics)[newsPost.id - 1]}
                      {...newsPost}
                    />
                  ))}
                </NewsLine>
              ))}
            </NewsContent>
          </NewsWrapper>
        </Container>
      </Wrapper>
      <Container>
        <Footer />
      </Container>
    </React.Fragment>
  );
};

export { Blog };
