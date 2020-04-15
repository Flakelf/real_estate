import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

import Masonry from 'react-masonry-css';

import * as R from 'ramda';

import { getNews, getBlogPosts } from '../../modules/blog/selectors';

import { Tabs, NewsPostPreview, BlogPostPreview } from './components';

import { Filter, Container } from '../../ui/components';
import { Search } from '../../ui/icons';

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
    <Wrapper>
      <BlogWrapper>
        <BlogHeader>Blog</BlogHeader>
        <BlogContent>
          <Masonry
            breakpointCols={4}
            className='my-masonry-grid'
            columnClassName='my-masonry-grid_column'
          >
            {blogPosts.map(blogPost => (
              <BlogPostPreview
                key={blogPost.id}
                imgSrc={Object.values(blogPics)[blogPost.id - 1]}
                {...blogPost}
              />
            ))}
          </Masonry>
        </BlogContent>
      </BlogWrapper>

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
    </Wrapper>
  );
};

export { Blog };
