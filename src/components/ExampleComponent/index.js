import React, { Component, createElement } from 'react';
import { connect } from 'react-redux';
import marksy from 'marksy';

import { fetchArticles } from '../../state/Articles/actions';

import './styles.css';

const getMarkup = field => {
  if (!field) return null;
  const compile = marksy({
    createElement,
    elements: {}
  });
  return compile(field).tree;
};

class ExampleComponent extends Component {
  componentDidMount() {
    this.props.fetchArticles();
  }

  render() {
    let articles = this.props.articles.map(article => {
      let content = getMarkup(article.body);
      return (
        <article className="example-component__article" key={article.id}>
          <h2>{article.title}</h2>
          <div>{content}</div>
        </article>
      );
    });

    return (
      <div className="example-component">
        <h1 className="example-component__title">
          Welcome to React Starter, this is an example component.
        </h1>
        <div className="example-component__articles">
          {articles}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  articles: state.articles.items,
});

const mapDispatchToProps = (dispatch) => ({
  fetchArticles: () => dispatch(fetchArticles()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExampleComponent);